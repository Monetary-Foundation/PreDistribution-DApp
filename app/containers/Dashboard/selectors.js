import { createSelector } from 'reselect';

/**
 * Direct selector to the dashboard state domain
 */
const selectDashboardDomain = (state) => state.get('dashboard');

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

const makeSelectTotalsMap = () => createSelector(
  selectDashboardDomain,
  (substate) => substate.get('distributionInfo')
    ? substate.getIn(['distributionInfo', 'totals']).toJS()
      .map((value, index) => {
        const unit = {};
        unit.window = index;
        unit.eth_commited = value;
        return unit;
      })
    : null
);

const makeSelectCurrentWindow = () => createSelector(
  selectDashboardDomain,
  (substate) => substate.get('distributionInfo') ? Number(substate.getIn(['distributionInfo', 'currentWindow'])) : 0
);

const makeSelectTotalWindows = () => createSelector(
  selectDashboardDomain,
  (substate) => substate.get('distributionInfo') ? Number(substate.getIn(['distributionInfo', 'totalWindows'])) : 0
);

/* -------------------------------*/

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

// Remove all occurrences of string 'error:' and 'Returned'
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
  makeSelectTotalsMap,
  makeSelectCurrentWindow,
  makeSelectTotalWindows,

  makeSelectGetAddressInfoLoading,
  makeSelectGetAddressInfoError,
  makeSelectAddressInfo,

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
