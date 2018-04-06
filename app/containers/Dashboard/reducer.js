/*
 *
 * Dashboard reducer
 *
 */

import { fromJS } from 'immutable';
import {
  INIT_DASHBOARD,
  INIT_DASHBOARD_SUCCESS,
  INIT_DASHBOARD_ERROR,

  GET_DISTRIBUTION_INFO,
  GET_DISTRIBUTION_INFO_ERROR,
  GET_DISTRIBUTION_INFO_SUCCESS,

  COMMIT_ETH_SEND_CHANGE_WINDOW,
  COMMIT_ETH_SEND_CHANGE_AMOUNT,
  COMMIT_ETH_SEND,
  COMMIT_ETH_SEND_SUCCESS,
  COMMIT_ETH_SEND_ERROR,

  ADD_NEW_SET_EVENT,


  SET_STORAGE_VALUE,
  SET_STORAGE_VALUE_ERROR,
  SET_STORAGE_VALUE_SUCCESS,

  GET_STORAGE_VALUE,
  GET_STORAGE_VALUE_SUCCESS,
  GET_STORAGE_VALUE_ERROR,

} from './constants';

const initialState = fromJS({
  initStatus: null,
  web3: null,
  networkName: null,
  tokenName: null,
  tokenAddress: null,
  distributionAddress: null,
  tokenList: null,

  getDistributionInfoLoading: null,
  getDistributionInfoError: null,
  distributionInfo: null,

  commitEthSendWindow: 0,
  commitEthSendAmount: 0.01,

  commitEthSendLoading: null,
  commitEthSendError: null,
  commitEthSendTx: null,


  simpleStorageInstance: null,

  setStorageValue: null,
  setStorageLoading: false,
  setStorageError: false,

  storageValue: null,
  getStorageValueLoading: false,
  getStorageValueError: false,

  setEvents: [],

});

function dashboardReducer(state = initialState, action) {
  switch (action.type) {
    case INIT_DASHBOARD:
      return state
        .set('initStatus', 'loading');
    case INIT_DASHBOARD_ERROR:
      return state
        .set('initStatus', 'error')
        .set('web3', action.error);
    case INIT_DASHBOARD_SUCCESS:
      return state
        .set('initStatus', 'done')
        .set('web3', action.web3)
        .set('networkName', action.networkName)
        .set('tokenName', action.tokenName)
        .set('tokenAddress', action.tokenAddress)
        .set('distributionAddress', action.distributionAddress)
        .set('tokenList', fromJS(action.tokenList));

    case GET_DISTRIBUTION_INFO:
      return state
        .set('getDistributionInfoLoading', true)
        .set('getDistributionInfoError', false);
    case GET_DISTRIBUTION_INFO_ERROR:
      return state
        .set('getDistributionInfoLoading', false)
        .set('getDistributionInfoError', action.error);
    case GET_DISTRIBUTION_INFO_SUCCESS:
      return state
        .set('getDistributionInfoLoading', false)
        .set('getDistributionInfoError', false)
        .set('distributionInfo', fromJS(action.distributionInfo));

    case COMMIT_ETH_SEND_CHANGE_WINDOW:
      return state
        .set('commitEthSendWindow', action.window);
    case COMMIT_ETH_SEND_CHANGE_AMOUNT:
      return state
        .set('commitEthSendAmount', action.amount);
    case COMMIT_ETH_SEND:
      return state
        .set('commitEthSendLoading', true)
        .set('commitEthSendError', false)
        .set('commitEthSendTx', null);
    case COMMIT_ETH_SEND_ERROR:
      return state
        .set('commitEthSendLoading', false)
        .set('commitEthSendError', action.error);
    case COMMIT_ETH_SEND_SUCCESS:
      return state
        .set('commitEthSendLoading', false)
        .set('commitEthSendError', false)
        .set('commitEthSendTx', action.commitEthSendTx);


    case ADD_NEW_SET_EVENT:
      return state
        .set('setEvents', state.get('setEvents').push(action.event));

    /* ----------------Remove ----------*/
    case SET_STORAGE_VALUE:
      return state
        .set('setStorageValue', action.value)
        .set('setStorageLoading', true)
        .set('setStorageError', false);
    case SET_STORAGE_VALUE_SUCCESS:
      return state
        .set('setStorageLoading', false)
        .set('setStorageError', false);
    case SET_STORAGE_VALUE_ERROR:
      return state
        // .set('setStorageValue', null)
        .set('setStorageLoading', false)
        .set('setStorageError', action.error);

    case GET_STORAGE_VALUE:
      return state
        .set('getStorageValueLoading', true)
        .set('getStorageValueError', false);
    case GET_STORAGE_VALUE_SUCCESS:
      return state
        .set('storageValue', action.storageValue)
        .set('getStorageValueLoading', false)
        .set('getStorageValueError', false);
    case GET_STORAGE_VALUE_ERROR:
      return state
        .set('getStorageValue', null)
        .set('getStorageValueLoading', false)
        .set('getStorageValueError', action.error);

    default:
      return state;
  }
}

export default dashboardReducer;
