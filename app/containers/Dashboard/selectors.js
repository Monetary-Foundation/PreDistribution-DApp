import { createSelector } from 'reselect';
import { initialState } from './reducer';
/**
 * Direct selector to the dashboard state domain
 * Added temporary fix for reselect and devtools: https://github.com/reduxjs/reselect/issues/341
 */
const selectDashboardDomain = (state) => state.get('dashboard', initialState);

const makeSelectInitStatus = () => createSelector(
  selectDashboardDomain,
  (substate) => substate.get('initStatus')
);
const makeSelectWeb3 = () => createSelector(
  selectDashboardDomain,
  (substate) => substate.get('web3')
);
const makeSelectIsWeb3Browser = () => createSelector(
  selectDashboardDomain,
  (substate) => substate.get('isWeb3Browser')
);

const makeSelectNetworkId = () => createSelector(
  selectDashboardDomain,
  (substate) => substate.get('networkId') && Number(substate.get('networkId'))
);
const makeSelectNetworkName = () => createSelector(
  selectDashboardDomain,
  (substate) => substate.get('networkName')
);
const makeSelectTokenName = () => createSelector(
  selectDashboardDomain,
  (substate) => substate.get('tokenName')
);
const makeSelectTokenSymbol = () => createSelector(
  selectDashboardDomain,
  (substate) => substate.get('tokenSymbol')
);
const makeSelectTokenAddress = () => createSelector(
  selectDashboardDomain,
  (substate) => substate.get('tokenAddress')
);
const makeSelectDistributionAddress = () => createSelector(
  selectDashboardDomain,
  (substate) => substate.get('distributionAddress')
);
const makeSelectTokenList = () => createSelector(
  selectDashboardDomain,
  (substate) => substate.get('tokenList') ? substate.get('tokenList').toJS() : null
);

const makeSelectGetDistributionInfoLoading = () => createSelector(
  selectDashboardDomain,
  (substate) => substate.get('getDistributionInfoLoading')
);
const makeSelectGetDistributionInfoError = () => createSelector(
  selectDashboardDomain,
  (substate) => substate.get('getDistributionInfoError')
);

/* ------ distributionInfo Related ------------------------------------------------------------------*/

const makeSelectDistributionInfo = () => createSelector(
  selectDashboardDomain,
  (substate) => substate.get('distributionInfo') ? substate.get('distributionInfo').toJS() : null
);

const makeSelectTotalsList = () => createSelector(
  selectDashboardDomain,
  (substate) => {
    if (substate.getIn(['distributionInfo', 'totals']) && substate.get('web3')) {
      const web3 = substate.get('web3');
      return substate.getIn(['distributionInfo', 'totals']).toJS()
        .map((value, index) => {
          const unit = {};
          unit.window = index;
          unit.eth_commited = web3.utils.fromWei(value);
          return unit;
        })
        .filter((value) => value.eth_commited !== '0');
    }
    return null;
  }
);

/**
 * calculate sum of all members and convert to Ether
 * @param {Object} immutableList Immutable array which members are strings of amounts in Wei
 * @param {Object} web3 web3 instanse
 * @returns {string} sum of all members converted to Ether
 */
const immutableSumReducer = (immutableList, web3) => {
  const BN = web3.utils && web3.utils.BN;
  const weiSum = immutableList.toJS()
    .reduce((prev, curr) => {
      if (curr !== '0') {
        const prevBn = new BN(prev);
        const currBn = new BN(curr);
        return prevBn.add(currBn).toString(10);
      }
      // if curr is '0' return prev
      return prev;
    }, '0');
  return Number(web3.utils.fromWei(weiSum)).toFixed(2);
};

const makeSelectTotalsSum = () => createSelector(
  selectDashboardDomain,
  (substate) => {
    const sumList = substate.getIn(['distributionInfo', 'totals']);
    if (sumList && substate.get('web3')) {
      return immutableSumReducer(sumList, substate.get('web3'));
    }
    return '0';
  }
);


const makeSelectCurrentWindow = () => createSelector(
  selectDashboardDomain,
  (substate) => substate.get('distributionInfo') ? Number(substate.getIn(['distributionInfo', 'currentWindow'])) : 0
);

const makeSelectTotalWindows = () => createSelector(
  selectDashboardDomain,
  (substate) => substate.get('distributionInfo') ? Number(substate.getIn(['distributionInfo', 'totalWindows'])) : 0
);

/* -----------AddressInfo-------------------------------------------------------------------------*/

const makeSelectGetAddressInfoLoading = () => createSelector(
  selectDashboardDomain,
  (substate) => substate.get('getAddressInfoLoading')
);
const makeSelectGetAddressInfoError = () => createSelector(
  selectDashboardDomain,
  (substate) => substate.get('getAddressInfoError')
);
const makeSelectAddressInfo = () => createSelector(
  selectDashboardDomain,
  (substate) => substate.get('addressInfo') ? substate.get('addressInfo').toJS() : null
);

const makeSelectCommitmentsList = () => createSelector(
  selectDashboardDomain,
  (substate) => {
    if (substate.getIn(['addressInfo', 'commitments']) && substate.get('web3')) {
      const web3 = substate.get('web3');
      return substate.getIn(['addressInfo', 'commitments']).toJS()
        .map((value, index) => {
          const unit = {};
          unit.window = index;
          unit.eth_commited = web3.utils.fromWei(value);
          return unit;
        })
        .filter((window) => window.eth_commited !== '0');
    }
    return [];
  }
);

const makeSelectCommitmentsTotal = () => createSelector(
  selectDashboardDomain,
  (substate) => {
    const sumList = substate.getIn(['addressInfo', 'commitments']);
    if (sumList && substate.get('web3')) {
      return immutableSumReducer(sumList, substate.get('web3'));
    }
    return '0';
  }
);

const makeSelectRewardsList = () => createSelector(
  selectDashboardDomain,
  (substate) => {
    if (substate.getIn(['addressInfo', 'rewards']) && substate.get('web3')) {
      const web3 = substate.get('web3');
      return substate.getIn(['addressInfo', 'rewards']).toJS()
        .map((value, index) => {
          const unit = {};
          unit.window = index;
          unit.tokens_reward = Number(web3.utils.fromWei(value)).toFixed(2);
          return unit;
        })
        .filter((window) => window.tokens_reward !== '0.00');
    }
    return [];
  }
);


const makeSelectRewardsTotal = () => createSelector(
  selectDashboardDomain,
  (substate) => {
    const sumList = substate.getIn(['addressInfo', 'rewards']);
    if (sumList && substate.get('web3')) {
      return immutableSumReducer(sumList, substate.get('web3'));
    }
    return '0';
  }
);

/* CommitEth */

const makeSelectCommitEthSendWindow = () => createSelector(
  selectDashboardDomain,
  (substate) => substate.get('commitEthSendWindow') && Number(substate.get('commitEthSendWindow'))
);

const makeSelectCommitEthSendAmount = () => createSelector(
  selectDashboardDomain,
  (substate) => substate.get('commitEthSendAmount')
);

const makeSelectCommitEthSendLoading = () => createSelector(
  selectDashboardDomain,
  (substate) => substate.get('commitEthSendLoading')
);

const makeSelectCommitEthMinedLoading = () => createSelector(
  selectDashboardDomain,
  (substate) => substate.get('commitEthMinedLoading')
);

// Remove all occurrences of strings 'error:' and 'Returned'
const makeSelectCommitEthError = () => createSelector(
  selectDashboardDomain,
  (substate) => substate.get('commitEthError')
    ? substate.get('commitEthError').toString().replace(new RegExp('(error:|Returned)', 'ig'), '')
    : null
);

const makeSelectCommitEthSendTx = () => createSelector(
  selectDashboardDomain,
  (substate) => substate.get('commitEthSendTx')
);

const makeSelectCommitEthMinedRecipt = () => createSelector(
  selectDashboardDomain,
  (substate) => substate.get('commitEthMinedRecipt')
);


/* Withdraw */

const makeSelectWithdrawWindow = () => createSelector(
  selectDashboardDomain,
  (substate) => substate.get('withdrawWindow')
);

const makeSelectWithdrawSendLoading = () => createSelector(
  selectDashboardDomain,
  (substate) => substate.get('withdrawSendLoading')
);

const makeSelectWithdrawMinedLoading = () => createSelector(
  selectDashboardDomain,
  (substate) => substate.get('withdrawMinedLoading')
);

const makeSelectWithdrawError = () => createSelector(
  selectDashboardDomain,
  (substate) => substate.get('withdrawError')
);

const makeSelectWithdrawSendTx = () => createSelector(
  selectDashboardDomain,
  (substate) => substate.get('withdrawSendTx')
);

const makeSelectWithdrawMinedRecipt = () => createSelector(
  selectDashboardDomain,
  (substate) => substate.get('withdrawMinedRecipt')
);

/* WithdrawAll */

const makeSelectWithdrawAllSendLoading = () => createSelector(
  selectDashboardDomain,
  (substate) => substate.get('withdrawAllSendLoading')
);

const makeSelectWithdrawAllMinedLoading = () => createSelector(
  selectDashboardDomain,
  (substate) => substate.get('withdrawAllMinedLoading')
);

const makeSelectWithdrawAllError = () => createSelector(
  selectDashboardDomain,
  (substate) => substate.get('withdrawAllError')
);

const makeSelectWithdrawAllSendTx = () => createSelector(
  selectDashboardDomain,
  (substate) => substate.get('withdrawAllSendTx')
);

const makeSelectWithdrawAllMinedRecipt = () => createSelector(
  selectDashboardDomain,
  (substate) => substate.get('withdrawAllMinedRecipt')
);

/**
 * Default selector used by Dashboard
 */

const makeSelectDashboard = () => createSelector(
  selectDashboardDomain,
  (substate) => substate.toJS()
);

export default makeSelectDashboard;
export {
  selectDashboardDomain,

  makeSelectInitStatus,
  makeSelectWeb3,
  makeSelectIsWeb3Browser,
  makeSelectNetworkId,
  makeSelectNetworkName,
  makeSelectTokenName,
  makeSelectTokenSymbol,
  makeSelectTokenAddress,
  makeSelectDistributionAddress,
  makeSelectTokenList,

  makeSelectGetDistributionInfoLoading,
  makeSelectGetDistributionInfoError,

  makeSelectDistributionInfo,
  makeSelectTotalsList,
  makeSelectTotalsSum,

  makeSelectCurrentWindow,
  makeSelectTotalWindows,
  makeSelectCommitmentsTotal,
  makeSelectRewardsTotal,

  makeSelectGetAddressInfoLoading,
  makeSelectGetAddressInfoError,
  makeSelectAddressInfo,
  makeSelectCommitmentsList,
  makeSelectRewardsList,

  makeSelectCommitEthSendWindow,
  makeSelectCommitEthSendAmount,

  makeSelectCommitEthSendLoading,
  makeSelectCommitEthMinedLoading,
  makeSelectCommitEthSendTx,
  makeSelectCommitEthError,
  makeSelectCommitEthMinedRecipt,

  makeSelectWithdrawWindow,
  makeSelectWithdrawSendLoading,
  makeSelectWithdrawMinedLoading,
  makeSelectWithdrawError,
  makeSelectWithdrawSendTx,
  makeSelectWithdrawMinedRecipt,

  makeSelectWithdrawAllSendLoading,
  makeSelectWithdrawAllMinedLoading,
  makeSelectWithdrawAllError,
  makeSelectWithdrawAllSendTx,
  makeSelectWithdrawAllMinedRecipt,
};
