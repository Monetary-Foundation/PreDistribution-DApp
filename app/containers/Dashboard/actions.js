/*
 *
 * Dashboard actions
 *
 */

import {
  INIT_DASHBOARD,
  INIT_DASHBOARD_SUCCESS,
  INIT_DASHBOARD_ERROR,

  GET_DISTRIBUTION_INFO,
  GET_DISTRIBUTION_INFO_SUCCESS,
  GET_DISTRIBUTION_INFO_ERROR,

  GET_ADDRESS_INFO,
  GET_ADDRESS_INFO_SUCCESS,
  GET_ADDRESS_INFO_ERROR,

  COMMIT_ETH_SEND_CHANGE_WINDOW,
  COMMIT_ETH_SEND_CHANGE_AMOUNT,
  COMMIT_ETH_SEND,
  COMMIT_ETH_SEND_SUCCESS,
  COMMIT_ETH_SEND_ERROR,

  WITHDRAW_CHANGE_WINDOW,
  WITHDRAW_SEND,
  WITHDRAW_SEND_SUCCESS,
  WITHDRAW_MINED_SUCCESS,
  WITHDRAW_ERROR,

  // ADD_NEW_SET_EVENT,
} from './constants';


/**
 * Initiate init process
 *
 * @return {object} An action object with a type of INIT_DASHBOARD passing the repos
 */
export function initDashboard() {
  return {
    type: INIT_DASHBOARD,
  };
}

/**
 * Init process completed successfully
 *
 * @param  {object} web3
 * @param  {string} networkName
 * @param  {string} tokenName
 * @param  {string} tokenAddress
 * @param  {string} distributionAddress
 * @param  {object []} tokenList
 *
 * @return {object} An action object with a type of INIT_DASHBOARD_SUCCESS
 */
export function initDashboardSuccess(web3, networkName, tokenName, tokenAddress, distributionAddress, tokenList) {
  return {
    type: INIT_DASHBOARD_SUCCESS,
    web3,
    networkName,
    tokenName,
    tokenAddress,
    distributionAddress,
    tokenList,
  };
}

/**
 * Init process completed with error
 *
 * @param  {string} error
 *
 * @return {object} An action object with a type of INIT_DASHBOARD_ERROR and error string
 */
export function initDashboardError(error) {
  console.log(error);
  return {
    type: INIT_DASHBOARD_ERROR,
    error,
  };
}

/**
 * get distribution contract info
 *
 * @return {object} An action object with a type of GET_DISTRIBUTION_INFO passing the repos
 */
export function getDistributionInfo() {
  return {
    type: GET_DISTRIBUTION_INFO,
  };
}

/**
 * getDistributionInfo completed successfully
 *
 * @param  {object} distributionInfo
 *
 * @return {object} An action object with a type of GET_DISTRIBUTION_INFO_SUCCESS and distributionInfo
 */
export function getDistributionInfoSuccess(distributionInfo) {
  return {
    type: GET_DISTRIBUTION_INFO_SUCCESS,
    distributionInfo,
  };
}

/**
 * Init process completed with error
 *
 * @param  {string} error
 *
 * @return {object} An action object with a type of GET_DISTRIBUTION_INFO_ERROR and error string
 */
export function getDistributionInfoError(error) {
  console.log(error);
  return {
    type: GET_DISTRIBUTION_INFO_ERROR,
    error,
  };
}

/**
 * get address specific distribution contract info
 *
 * @return {object} An action object with a type of GET_ADDRESS_INFO
 */
export function getAddressInfo() {
  return {
    type: GET_ADDRESS_INFO,
  };
}

/**
 * getDistributionInfo completed successfully
 *
 * @param  {object} addressInfo
 *
 * @return {object} An action object with a type of GET_ADDRESS_INFO_SUCCESS and addressInfo
 */
export function getAddressInfoSuccess(addressInfo) {
  return {
    type: GET_ADDRESS_INFO_SUCCESS,
    addressInfo,
  };
}

/**
 * getAddressInfo completed with error
 *
 * @param  {string} error
 *
 * @return {object} An action object with a type of GET_ADDRESS_INFO_ERROR and error string
 */
export function getAddressInfoError(error) {
  console.log(error);
  return {
    type: GET_ADDRESS_INFO_ERROR,
    error,
  };
}


/**
 * Update the commit window
 * @param  {number} window number of window commit to
 *
 * @return {object}    An action object with a type of COMMIT_ETH_SEND_CHANGE_WINDOW and window
 */
export function changeWindow(window) {
  console.log('changeWindow');

  return {
    type: COMMIT_ETH_SEND_CHANGE_WINDOW,
    window,
  };
}

/**
 * Update the commit amount
 * @param  {number} amount
 *
 * @return {object}    An action object with a type of COMMIT_ETH_SEND_CHANGE_AMOUNT
 */
export function changeAmount(amount) {
  return {
    type: COMMIT_ETH_SEND_CHANGE_AMOUNT,
    amount,
  };
}

/**
 * create commit transaction and send
 *
 * @return {object} An action object with a type of COMMIT_ETH_SEND
 */
export function commitEthSend() {
  return {
    type: COMMIT_ETH_SEND,
  };
}

/**
 * commit transaction were sent successfully
 *
 * @param  {string} commitEthSendTx transaction tx
 *
 * @return {object} An action object with a type of COMMIT_ETH_SEND_SUCCESS and tx
 */
export function commitEthSendSuccess(commitEthSendTx) {
  return {
    type: COMMIT_ETH_SEND_SUCCESS,
    commitEthSendTx,
  };
}

/**
 * error while sending commit transaction
 *
 * @param  {string} error
 *
 * @return {object} An action object with a type of COMMIT_ETH_SEND_ERROR and error string
 */
export function commitEthSendError(error) {
  console.log(error);
  return {
    type: COMMIT_ETH_SEND_ERROR,
    error,
  };
}


/**
 * Update the withdraw window
 *
 * @param  {number} window number of window commit to
 *
 * @return {object}    An action object with a type of WITHDRAW_CHANGE_WINDOW and window number
 */
export function changeWithdrawWindow(window) {
  console.log('changeWithdrawWindow');
  return {
    type: WITHDRAW_CHANGE_WINDOW,
    window,
  };
}


/**
 * create withdraw transaction and send
 *
 * @return {object} An action object with a type of WITHDRAW_SEND
 */
export function withdrawSend() {
  return {
    type: WITHDRAW_SEND,
  };
}

/**
 * withdraw transaction were sent successfully
 *
 * @param  {string} withdrawSendTx transaction tx
 *
 * @return {object} An action object with a type of WITHDRAW_SEND_SUCCESS and tx
 */
export function withdrawSendSuccess(withdrawSendTx) {
  return {
    type: WITHDRAW_SEND_SUCCESS,
    withdrawSendTx,
  };
}


/**
 * withdraw transaction were sent successfully
 *
 * @param  {string} withdrawMinedRecipt recipt
 *
 * @return {object} An action object with a type of WITHDRAW_SEND_SUCCESS and tx
 */
export function withdrawMinedSuccess(withdrawMinedRecipt) {
  return {
    type: WITHDRAW_MINED_SUCCESS,
    withdrawMinedRecipt,
  };
}

/**
 * error during a withdraw
 *
 * @param  {string} error
 *
 * @return {object} An action object with a type of WITHDRAW_ERROR and error string
 */
export function withdrawError(error) {
  console.log(error);
  return {
    type: WITHDRAW_ERROR,
    error,
  };
}


/**
 * store the new event
 *
 * @param  {object} event
 *
 * @return {object} An action object with a type of NEW_EVENT an the new event object
 */
export function addNewEvent(eventAction) {
  // event already in the right format
  return eventAction;
}
