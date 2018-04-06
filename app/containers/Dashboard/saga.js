import { channel } from 'redux-saga';
import { take, call, put, select, takeLatest, fork } from 'redux-saga/effects';

import Web3 from 'web3';

import { distributionContracts } from 'utils/constants';

import { distributionAbi } from 'utils/contracts/abi';

import {
  INIT_DASHBOARD,
  SET_STORAGE_VALUE,
  GET_STORAGE_VALUE,
  // ADD_NEW_SET_EVENT,
  GET_DISTRIBUTION_INFO,
  COMMIT_ETH_SEND,
} from './constants';

import {
  initDashboardSuccess,
  initDashboardError,

  getDistributionInfo,
  getDistributionInfoSuccess,
  getDistributionInfoError,

  commitEthSendSuccess,
  commitEthSendError,

  addNewEvent,

  setStorageValueSuccess,
  setStorageValueError,
  getStorageValueSuccess,
  getStorageValueError,
} from './actions';

import {
  makeSelectWeb3,
  makeSelectSimpleStorage,
  makeSelectDistributionAddress,

  makeSelectCommitEthSendWindow,
  makeSelectCommitEthSendAmount,
} from './selectors';

// import SimpleStorageContract from '../../../truffle/build/contracts/SimpleStorage.json'
// import contract from 'truffle-contract';

export const timer = (ms) =>
  new Promise((resolve) => setTimeout(() => resolve('timer end'), ms));

const eventChannel = channel();


/**
 * Init Dashboard
 */
function* initDashboardAsync() {
  try {
    console.log('initDashboardAsync1');

    let web3js;
    // Checking if Web3 has been injected by the browser (Mist/MetaMask)
    if (typeof web3 !== 'undefined') {
      // Use Mist/MetaMask's provider
      web3js = new Web3(web3.currentProvider);

      web3js.eth.defaultAccount = web3.eth.defaultAccount;
      console.log((web3js.eth.defaultAccount));
    } else {
      throw new Error('No web3 injected (Mist/Metamask...), Aborting');
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
    console.log(`Network Name: ${networkName}`);
    // console.log(networkContracts);

    const token = networkContracts.tokenList.find(
      (token_) => token_.name === networkContracts.defaultTokenName
    );

    // console.log(token);

    // const simpleStorage = contract(SimpleStorageContract)
    // simpleStorage.setProvider(web3js.currentProvider)

    // // dirty hack for web3@1.0.0 support for localhost testrpc,
    // // see https://github.com/trufflesuite/truffle-contract/issues/56#issuecomment-331084530
    // if (typeof simpleStorage.currentProvider.sendAsync !== "function") {
    //   simpleStorage.currentProvider.sendAsync = function () {
    //     return simpleStorage.currentProvider.send.apply(
    //       simpleStorage.currentProvider,
    //       arguments
    //     );
    //   };
    // }

    // const simpleStorageInstance = yield call(simpleStorage.deployed);

    // console.log('Events:');

    // events using truffle:
    // fork the new saga from the main thread
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
      initDashboardSuccess(web3js, networkName, token.name, token.address, token.distributionAddress, networkContracts.tokenList)
    );
    yield put(getDistributionInfo());
    // v
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
 * setStorageValue
 */
function* setStorageValueAsync(action) {
  try {
    const selectWeb3 = yield select(makeSelectWeb3());
    const accounts = yield call(selectWeb3.eth.getAccounts);

    const simpleStorage = yield select(makeSelectSimpleStorage());

    const simpleStorageInstance = yield call(simpleStorage.deployed);

    // promise will resolve only when transaction is mined
    const setValueResult = yield call(simpleStorageInstance.set, action.value, { from: accounts[0] });
    console.log('setValueResult:');
    // console.log(setValueResult);

    if (setValueResult.receipt.logs.length > 0) { // receipt includes value from logs
      yield put(setStorageValueSuccess());
    } else {
      yield put(setStorageValueError('contract not found on network'));
    }
  } catch (err) {
    yield put(setStorageValueError(err.toString()));
  }
}

/**
 * getStorageValue
 */
function* getStorageValueAsync() {
  try {
    const simpleStorage = yield select(makeSelectSimpleStorage());

    const simpleStorageInstance = yield call(simpleStorage.deployed);
    const setValueResult = yield call(simpleStorageInstance.get.call);
    yield put(getStorageValueSuccess(setValueResult.toNumber()));
  } catch (err) {
    yield put(getStorageValueError(err.toString()));
  }
}

// TODO: ??
let distributionContract;

/**
 * getDistributionInfo
 */
function* getDistributionInfoAsync() {
  try {
    const web3 = yield select(makeSelectWeb3());
    const distributionAddress = yield select(makeSelectDistributionAddress());
    distributionContract = new web3.eth.Contract(distributionAbi, distributionAddress);

    // TODO:Remove
    yield call(timer, 1500);

    const getLatestBlock = web3.eth.getBlock('latest');

    const getCurrentWindow = distributionContract.methods.currentWindow().call();
    const getTotalWindows = distributionContract.methods.totalWindows().call();

    const getStartTimestamp = distributionContract.methods.startTimestamp().call();
    const getWindowLenght = distributionContract.methods.windowLength().call();

    const getFirstPeriodWindows = distributionContract.methods.firstPeriodWindows().call();
    const getSecondPeriodWindows = distributionContract.methods.secondPeriodWindows().call();

    const getFirstPeriodSupply = distributionContract.methods.firstPeriodSupply().call();
    const getSecondPeriodSupply = distributionContract.methods.secondPeriodSupply().call();


    const getAllPromises = () =>
      Promise.all([getLatestBlock, getCurrentWindow, getTotalWindows, getStartTimestamp, getWindowLenght,
        getFirstPeriodWindows, getSecondPeriodWindows, getFirstPeriodSupply, getSecondPeriodSupply]);

    const [latestBlock, currentWindow, totalWindows, startTimestamp, windowLenght,
      firstPeriodWindows, secondPeriodWindows, firstPeriodSupply, secondPeriodSupply] = yield call(getAllPromises);

    const distributionInfo = {
      timestamp: latestBlock.timestamp,
      currentWindow,
      totalWindows,
      startTimestamp,
      windowLenght,
      firstPeriodWindows,
      secondPeriodWindows,
      firstPeriodSupply,
      secondPeriodSupply,
    };

    yield put(getDistributionInfoSuccess(distributionInfo));
  } catch (err) {
    yield put(getDistributionInfoError(err.toString()));
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

    console.log(web3.eth.defaultAccount);


    const sendPromise = () =>
      distributionContract.methods.commitOn(window).send({
        from: web3.eth.defaultAccount,
        value: web3.utils.toWei(amount, 'ether'),
      });
    // TODO:Remove
    // yield call(timer, 1500);

    const receipt = yield call(sendPromise);

    yield put(commitEthSendSuccess(receipt));
  } catch (err) {
    yield put(commitEthSendError(err.toString()));
  }
}

// Individual exports for testing
export default function* defaultSaga() {
  yield takeLatest(INIT_DASHBOARD, initDashboardAsync);

  yield takeLatest(GET_DISTRIBUTION_INFO, getDistributionInfoAsync);

  yield takeLatest(COMMIT_ETH_SEND, commitEthSendAsync);

  yield takeLatest(SET_STORAGE_VALUE, setStorageValueAsync);
  yield takeLatest(GET_STORAGE_VALUE, getStorageValueAsync);
}
