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

  COMMIT_ETH_SEND_CHANGE_WINDOW,
  COMMIT_ETH_SEND_CHANGE_AMOUNT,
  COMMIT_ETH_SEND,
  COMMIT_ETH_SEND_SUCCESS,
  COMMIT_ETH_SEND_ERROR,
  // ADD_NEW_SET_EVENT,

  SET_STORAGE_VALUE,
  SET_STORAGE_VALUE_SUCCESS,
  SET_STORAGE_VALUE_ERROR,

  GET_STORAGE_VALUE,
  GET_STORAGE_VALUE_SUCCESS,
  GET_STORAGE_VALUE_ERROR,

} from './constants';

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
 * Init process compleated successfully
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
 * Init process compleated with error
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
 * getDistributionInfo compleated successfully
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
 * Init process compleated with error
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


/**
 * Set storage value
 *
 * @param  {number} value
 *
 * @return {object} An action object with a type of SET_STORAGE_VALUE
 */
export function setStorageValue(value) {
  return {
    type: SET_STORAGE_VALUE,
    value,
  };
}

/**
 * setStorageValue success
 *
 * @return {object} An action object with a type of SET_STORAGE_VALUE_SUCCESS
 */
export function setStorageValueSuccess() {
  return {
    type: SET_STORAGE_VALUE_SUCCESS,
  };
}

/**
 * setStorageValue failed
 *
 * @param  {string} error
 *
 * @return {object} An action object with a type of SET_STORAGE_VALUE_ERROR and error string
 */
export function setStorageValueError(error) {
  console.log(error);
  return {
    type: SET_STORAGE_VALUE_ERROR,
    error,
  };
}

/**
 * Get storage value
 *
 * @return {object} An action object with a type of GET_STORAGE_VALUE
 */
export function getStorageValue() {
  console.log('getStorageValue()');

  return {
    type: GET_STORAGE_VALUE,
  };
}

/**
 * setStorageValue success
 * @param  {number} storageValue
 *
 * @return {object} An action object with a type of SET_STORAGE_VALUE_SUCCESS
 */
export function getStorageValueSuccess(storageValue) {
  return {
    type: GET_STORAGE_VALUE_SUCCESS,
    storageValue,
  };
}

/**
 * setStorageValue failed
 *
 * @param  {string} error
 *
 * @return {object} An action object with a type of GET_STORAGE_VALUE_ERROR and error string
 */
export function getStorageValueError(error) {
  console.log(error);
  return {
    type: GET_STORAGE_VALUE_ERROR,
    error,
  };
}

