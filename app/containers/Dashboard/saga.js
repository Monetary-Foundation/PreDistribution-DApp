import { channel } from 'redux-saga';
import { take, call, put, select, takeLatest, fork } from 'redux-saga/effects';

import Web3 from 'web3';

import { distributionContracts } from 'utils/constants';

import { distributionAbi } from 'utils/contracts/abi';

import {
  INIT_DASHBOARD,
  // ADD_NEW_SET_EVENT,
  GET_DISTRIBUTION_INFO,
  GET_ADDRESS_INFO,
  COMMIT_ETH_SEND,
  WITHDRAW_SEND,
} from './constants';

import {
  initDashboardSuccess,
  initDashboardError,

  getDistributionInfo,
  getDistributionInfoSuccess,
  getDistributionInfoError,

  getAddressInfo,
  getAddressInfoSuccess,
  getAddressInfoError,

  commitEthSendSuccess,
  commitEthSendError,

  // withdrawSendSuccess,
  withdrawMinedSuccess,
  withdrawError,

  addNewEvent,

} from './actions';

import {
  makeSelectWeb3,
  makeSelectDistributionAddress,

  makeSelectCommitEthSendWindow,
  makeSelectCommitEthSendAmount,
  makeSelectWithdrawWindow,
} from './selectors';


export const timer = (ms) =>
  new Promise((resolve) => setTimeout(() => resolve('timer end'), ms));

const eventChannel = channel();

let distributionContract;

/**
 * Init Dashboard
 */
function* initDashboardAsync(action) {
  try {
    let web3js;

    // Will be set to true if no web3 is injected from external source.
    let isWeb3Browser = false;

    // Checking if Web3 has been injected by the browser (Mist/MetaMask...)
    if (typeof web3 !== 'undefined') {
      // Use Mist/MetaMask's provider
      web3js = new Web3(web3.currentProvider); // eslint-disable-line no-undef

      web3js.eth.defaultAccount = web3.eth.defaultAccount; // eslint-disable-line no-undef
      isWeb3Browser = true;
    } else {
      // throw new Error('No web3 injected (Mist/Metamask...), Aborting');
      console.log('No web3 injected (Mist/Metamask...), Using local fallback');
      web3js = new Web3(new Web3.providers.WebsocketProvider('wss://ropsten.infura.io/ws'));
      // web3js = new Web3(new Web3.providers.HttpProvider('http://127.0.0.1:8545'));
      isWeb3Browser = false;
      // web3js = new Web3(new Web3.providers.WebsocketProvider('wss://ropsten.infura.io/ws'));
      // const web2 = new Web3(new Web3.providers.WebsocketProvider('wss://mainnet.infura.io/ws'));
      // const web2 = new Web3(new Web3.providers.WebsocketProvider('wss://rinkeby.infura.io/ws'));
      // console.log(web2);
      // const subscription = web2.eth.subscribe('newBlockHeaders', (error, blockHeader) => {
      //   if (error) return console.error(error);
      //   console.log('Successfully subscribed!', blockHeader);
      // }).on('data', (blockHeader) => {
      //   console.log('data: ', blockHeader);
      // });

      // // unsubscribes the subscription
      // subscription.unsubscribe((error, success) => {
      //   if (error) return console.error(error);

      //   console.log('Successfully unsubscribed!');
      // });
    }

    let netId;
    try {
      netId = yield call(web3js.eth.net.getId);
    } catch (err) {
      throw new Error(`web3.eth.net.getId error, check connection to RPC endpoint and refresh page. ${err}`);
    }
    console.log(`netid: ${netId}`);

    const networkContracts = distributionContracts[netId] || distributionContracts.default;

    const networkName = networkContracts.networkName;

    const tokenSelect = action.tokenName || networkContracts.defaultTokenName;

    const token = networkContracts.tokenList.find(
      (token_) => token_.name === tokenSelect
    );

    yield fork(handleEvents);

    // send every Set() event into eventChannel
    // simpleStorageInstance.contract.Set(
    //   null, // use no filter
    //   (_, event) => {
    //     console.log('call')
    //     eventChannel.put({
    //       type: ADD_NEW_SET_EVENT,
    //       event,
    //     });
    //   }
    // );

    yield put(
      initDashboardSuccess(web3js, isWeb3Browser, networkName, token.name, token.address, token.distributionAddress, networkContracts.tokenList)
    );
    yield put(getDistributionInfo());
  } catch (err) {
    yield put(initDashboardError(err.toString()));
  }
}

/*
 * catch all events from channel and create an action
 */
function* handleEvents() {
  while (true) {
    const eventAction = yield take(eventChannel);
    yield put(addNewEvent(eventAction));
  }
}

/**
 * getDistributionInfo
 */
function* getDistributionInfoAsync() {
  try {
    const web3 = yield select(makeSelectWeb3());
    const distributionAddress = yield select(makeSelectDistributionAddress());
    distributionContract = new web3.eth.Contract(distributionAbi, distributionAddress);

    // TODO:Remove
    yield call(timer, 500);

    const allCalls = [];

    allCalls.push(web3.eth.getBlock('latest'));
    allCalls.push(distributionContract.methods.totalWindows().call());
    // allCalls.push(distributionContract.methods.startTimestamp().call());
    // allCalls.push(distributionContract.methods.windowLength().call());
    allCalls.push(distributionContract.methods.firstPeriodWindows().call());
    allCalls.push(distributionContract.methods.secondPeriodWindows().call());
    allCalls.push(distributionContract.methods.firstPeriodSupply().call());
    allCalls.push(distributionContract.methods.secondPeriodSupply().call());
    allCalls.push(distributionContract.methods.getTotals().call());
    allCalls.push(distributionContract.methods.detailsOfWindow().call());

    const getAllPromises = () => Promise.all(allCalls);

    const [
      latestBlock,
      totalWindows,
      // startTimestamp,
      // windowLenght,
      firstPeriodWindows,
      secondPeriodWindows,
      firstPeriodSupply,
      secondPeriodSupply,
      totals,
      detailsOfWindow,
    ] = yield call(getAllPromises);

    const {
      // start,
      // end,
      remainingTime,
      allocation,
      // totalEth,
      number,
    } = detailsOfWindow;

    const distributionInfo = {
      timestamp: latestBlock.timestamp,
      currentWindow: number,
      totalWindows,
      // startTimestamp,
      // windowLenght,
      firstPeriodWindows,
      secondPeriodWindows,
      firstPeriodSupply,
      secondPeriodSupply,
      totals,

      remainingTime,
      allocation,
    };


    yield put(getDistributionInfoSuccess(distributionInfo));
    yield put(getAddressInfo());
  } catch (err) {
    yield put(getDistributionInfoError(err.toString()));
  }
}
/**
 * getAddressInfoAsync
 */
function* getAddressInfoAsync() {
  try {
    const web3 = yield select(makeSelectWeb3());
    // const distributionAddress = yield select(makeSelectDistributionAddress());
    // distributionContract = new web3.eth.Contract(distributionAbi, distributionAddress);

    // TODO:Remove
    // yield call(timer, 500);

    const address = (yield call(() => web3.eth.getAccounts()))[0];

    const getCommitments = distributionContract.methods.getCommitmentsOf(address).call();
    const getRewards = distributionContract.methods.getAllRewards().call();

    const getAllPromises = () =>
      Promise.all([getCommitments, getRewards]);

    const [commitments, rewards] = yield call(getAllPromises);

    const distributionInfo = {
      address,
      commitments,
      rewards,
    };

    // const getRewards = () => distributionContract.methods.getAllRewards().call();
    // const rewards = yield call(getRewards);


    yield put(getAddressInfoSuccess(distributionInfo));
  } catch (err) {
    yield put(getAddressInfoError(err.toString()));
  }
}

/**
 * commitEthSendAsync
 */
function* commitEthSendAsync() {
  try {
    const web3 = yield select(makeSelectWeb3());
    const window = yield select(makeSelectCommitEthSendWindow());
    const amount = (yield select(makeSelectCommitEthSendAmount()));

    console.log(`window: ${window}`);
    console.log(`amount: ${amount}`);
    console.log(`typeof amount: ${typeof (amount)}`);

    const defaultAccount = (yield call(() => web3.eth.getAccounts()))[0];
    console.log(defaultAccount);

    const sendPromise = () =>
      distributionContract.methods.commitOn(window).send({
        from: defaultAccount,
        gas: (100000).toString(),
        gasPrice: web3.utils.toWei((10).toString(), 'gwei'),
        value: web3.utils.toWei(amount.toString(), 'ether'),
      });


    const receipt = yield call(sendPromise);
    console.log(receipt);

    yield put(commitEthSendSuccess('receipt'));
  } catch (err) {
    const errMsg = err.toString();
    const shortErr = errMsg.substring(0, errMsg.indexOf('.') + 1);
    yield put(commitEthSendError(shortErr));
  }
}

/**
 * withdrawSendAsync
 */
function* withdrawSendAsync() {
  try {
    const web3 = yield select(makeSelectWeb3());
    const window = yield select(makeSelectWithdrawWindow());

    console.log('withdrawSendAsync');
    console.log(`window: ${window}`);

    const defaultAccount = (yield call(() => web3.eth.getAccounts()))[0];
    console.log(defaultAccount);

    const sendPromise = () =>
      distributionContract.methods.withdraw(window).send({
        from: defaultAccount,
        gas: (100000).toString(),
        gasPrice: web3.utils.toWei((10).toString(), 'gwei'),
        value: 0,
      });


    const receipt = yield call(sendPromise);
    console.log(receipt);

    yield put(withdrawMinedSuccess({ recipt: 'withdraw receipt' }));
  } catch (err) {
    const errMsg = err.toString();
    const shortErr = errMsg.substring(0, errMsg.indexOf('.') + 1);
    yield put(withdrawError(shortErr));
  }
}

// Individual exports for testing
export default function* defaultSaga() {
  yield takeLatest(INIT_DASHBOARD, initDashboardAsync);

  yield takeLatest(GET_DISTRIBUTION_INFO, getDistributionInfoAsync);
  yield takeLatest(GET_ADDRESS_INFO, getAddressInfoAsync);

  yield takeLatest(COMMIT_ETH_SEND, commitEthSendAsync);
  yield takeLatest(WITHDRAW_SEND, withdrawSendAsync);
}
