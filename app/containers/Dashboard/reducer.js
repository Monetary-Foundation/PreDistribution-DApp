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

  GET_ADDRESS_INFO,
  GET_ADDRESS_INFO_SUCCESS,
  GET_ADDRESS_INFO_ERROR,

  COMMIT_ETH_SEND_CHANGE_WINDOW,
  COMMIT_ETH_SEND_CHANGE_AMOUNT,

  COMMIT_ETH_SEND,
  COMMIT_ETH_SEND_SUCCESS,
  COMMIT_ETH_MINED_SUCCESS,
  COMMIT_ETH_ERROR,

  WITHDRAW_CHANGE_WINDOW,
  WITHDRAW_SEND,
  WITHDRAW_SEND_SUCCESS,
  WITHDRAW_MINED_SUCCESS,
  WITHDRAW_ERROR,

  WITHDRAW_ALL_SEND,
  WITHDRAW_ALL_SEND_SUCCESS,
  WITHDRAW_ALL_MINED_SUCCESS,
  WITHDRAW_ALL_ERROR,

  ADD_NEW_SET_EVENT,
} from './constants';

const initialState = fromJS({
  initStatus: null,
  web3: null,
  isWeb3Browser: null,
  networkId: null,
  networkName: null,
  tokenName: null,
  tokenSymbol: null,
  tokenAddress: null,
  distributionAddress: null,
  tokenList: null,

  getDistributionInfoLoading: null,
  getDistributionInfoError: null,
  distributionInfo: null,

  getAddressInfoLoading: null,
  getAddressInfoError: null,
  addressInfo: null,

  commitEthSendWindow: 0,
  commitEthSendAmount: 0.01,

  commitEthSendLoading: null,
  commitEthMinedLoading: null,
  commitEthError: null,
  commitEthSendTx: null,
  commitEthMinedRecipt: null,

  withdrawWindow: 0,

  withdrawSendLoading: false,
  withdrawMinedLoading: false,
  withdrawError: false,
  withdrawSendTx: null,
  withdrawMinedRecipt: null,

  withdrawAllSendLoading: false,
  withdrawAllMinedLoading: false,
  withdrawAllError: false,
  withdrawAllSendTx: null,
  withdrawAllMinedRecipt: null,

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
        .set('isWeb3Browser', action.isWeb3Browser)
        .set('networkId', action.networkId)
        .set('networkName', action.networkName)
        .set('tokenName', action.tokenName)
        .set('tokenSymbol', action.tokenSymbol)
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
        .set('distributionInfo', fromJS(action.distributionInfo))
        .set('commitEthSendWindow', fromJS(action.distributionInfo.currentWindow));

    case GET_ADDRESS_INFO:
      return state
        .set('getAddressInfoLoading', true)
        .set('getAddressInfoError', false);
    case GET_ADDRESS_INFO_ERROR:
      return state
        .set('getAddressInfoLoading', false)
        .set('getAddressInfoError', action.error);
    case GET_ADDRESS_INFO_SUCCESS:
      return state
        .set('getAddressInfoLoading', false)
        .set('getAddressInfoError', false)
        .set('addressInfo', fromJS(action.addressInfo));

    case COMMIT_ETH_SEND_CHANGE_WINDOW:
      return state
        .set('commitEthSendWindow', action.window);
    case COMMIT_ETH_SEND_CHANGE_AMOUNT:
      return state
        .set('commitEthSendAmount', action.amount);
    case COMMIT_ETH_SEND:
      return state
        .set('commitEthSendLoading', true)
        .set('commitEthError', false)
        .set('commitEthSendTx', null);
    case COMMIT_ETH_ERROR:
      return state
        .set('commitEthSendLoading', false)
        .set('commitEthError', action.error);
    case COMMIT_ETH_SEND_SUCCESS:
      return state
        .set('commitEthSendLoading', false)
        .set('commitEthError', false)
        .set('commitEthSendTx', action.commitEthSendTx);
    case COMMIT_ETH_MINED_SUCCESS:
      return state
      ;

    case WITHDRAW_CHANGE_WINDOW:
      return state
        .set('withdrawWindow', action.window);

    case WITHDRAW_SEND:
      return state
        .set('withdrawSendLoading', true)
        .set('withdrawMinedLoading', true)
        .set('withdrawError', false)
        .set('withdrawSendTx', null)
        .set('withdrawMinedRecipt', null);
    case WITHDRAW_ERROR:
      return state
        .set('withdrawSendLoading', false)
        .set('withdrawMinedLoading', false)
        .set('withdrawError', action.error);
    case WITHDRAW_SEND_SUCCESS:
      return state
        .set('withdrawSendLoading', false)
        .set('withdrawError', false)
        .set('withdrawSendTx', action.withdrawSendTx);
    case WITHDRAW_MINED_SUCCESS:
      return state
        .set('withdrawMinedLoading', false)
        .set('withdrawError', false)
        .set('withdrawMinedRecipt', action.withdrawMinedRecipt);

    case WITHDRAW_ALL_SEND:
      return state
        .set('withdrawAllSendLoading', true)
        .set('withdrawAllMinedLoading', true)
        .set('withdrawAllError', false)
        .set('withdrawAllSendTx', null)
        .set('withdrawAllMinedRecipt', null);
    case WITHDRAW_ALL_ERROR:
      return state
        .set('withdrawAllSendLoading', false)
        .set('withdrawAllMinedLoading', false)
        .set('withdrawAllError', action.error);
    case WITHDRAW_ALL_SEND_SUCCESS:
      return state
        .set('withdrawAllMinedLoading', false)
        .set('withdrawAllError', false)
        .set('withdrawAllSendTx', action.withdrawSendTx);
    case WITHDRAW_ALL_MINED_SUCCESS:
      return state
        .set('withdrawAllMinedLoading', false)
        .set('withdrawAllError', false)
        .set('withdrawAllMinedRecipt', action.withdrawMinedRecipt);


    case ADD_NEW_SET_EVENT:
      return state
        .set('setEvents', state.get('setEvents').push(action.event));

    default:
      return state;
  }
}

export default dashboardReducer;
