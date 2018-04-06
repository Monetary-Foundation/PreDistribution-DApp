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
const makeSelectNetworkName = () => createSelector(
  selectDashboardDomain,
  (substate) => substate.get('networkName')
);
const makeSelectTokenName = () => createSelector(
  selectDashboardDomain,
  (substate) => substate.get('tokenName')
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
const makeSelectDistributionInfo = () => createSelector(
  selectDashboardDomain,
  (substate) => substate.get('distributionInfo') ? substate.get('distributionInfo').toJS() : null
);

const makeSelectCommitEthSendWindow = () => createSelector(
  selectDashboardDomain,
  (substate) => substate.get('commitEthSendWindow')
);

const makeSelectCommitEthSendAmount = () => createSelector(
  selectDashboardDomain,
  (substate) => substate.get('commitEthSendAmount')
);

const makeSelectCommitEthSendLoading = () => createSelector(
  selectDashboardDomain,
  (substate) => substate.get('commitEthSendLoading')
);

const makeSelectCommitEthSendError = () => createSelector(
  selectDashboardDomain,
  (substate) => substate.get('commitEthSendError')
);

const makeSelectCommitEthSendTx = () => createSelector(
  selectDashboardDomain,
  (substate) => substate.get('commitEthSendTx')
);


/* ----------------Remove ----------*/
const makeSelectSimpleStorage = () => createSelector(
  selectDashboardDomain,
  (substate) => substate.get('simpleStorage')
);

const makeSelectSetStorageValue = () => createSelector(
  selectDashboardDomain,
  (substate) => substate.get('setStorageValue')
);

const makeSelectSetStorageLoading = () => createSelector(
  selectDashboardDomain,
  (substate) => substate.get('setStorageLoading')
);

const makeSelectSetStorageError = () => createSelector(
  selectDashboardDomain,
  (substate) => substate.get('setStorageError')
);

const makeSelectStorageValue = () => createSelector(
  selectDashboardDomain,
  (substate) => substate.get('storageValue')
);

const makeSelectGetStorageValueLoading = () => createSelector(
  selectDashboardDomain,
  (substate) => substate.get('getStorageValueLoading')
);

const makeSelectGetStorageValueError = () => createSelector(
  selectDashboardDomain,
  (substate) => substate.get('getStorageValueError')
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
  makeSelectNetworkName,
  makeSelectTokenName,
  makeSelectTokenAddress,
  makeSelectDistributionAddress,
  makeSelectTokenList,

  makeSelectGetDistributionInfoLoading,
  makeSelectGetDistributionInfoError,
  makeSelectDistributionInfo,

  makeSelectCommitEthSendWindow,
  makeSelectCommitEthSendAmount,
  makeSelectCommitEthSendLoading,
  makeSelectCommitEthSendError,
  makeSelectCommitEthSendTx,

  makeSelectSimpleStorage,
  makeSelectSetStorageValue,
  makeSelectSetStorageLoading,
  makeSelectSetStorageError,
  makeSelectStorageValue,
  makeSelectGetStorageValueLoading,
  makeSelectGetStorageValueError,
};
