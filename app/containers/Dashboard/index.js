/**
 *
 * Dashboard
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import styled from 'styled-components';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';


import Web3Status from 'components/Web3Status';
import DistributionInfo from 'components/DistributionInfo';
import Commit from 'components/Commit';
import Withdraw from 'components/Withdraw';


import reducer from './reducer';
import saga from './saga';
import {
  initDashboard,
  changeWindow,
  changeAmount,
  commitEthSend,

  changeWithdrawWindow,
  withdrawSend,
} from './actions';

import {

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

  makeSelectGetAddressInfoLoading,
  makeSelectGetAddressInfoError,
  makeSelectAddressInfo,

  makeSelectCommitEthSendWindow,
  makeSelectCommitEthSendAmount,
  makeSelectCommitEthSendLoading,
  makeSelectCommitEthSendError,
  makeSelectCommitEthSendTx,

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

} from './selectors';

import AddressInfo from '../../components/AddressInfo';


const Div = styled.div`
  padding:20px;
`;


export class Dashboard extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    this.props.onInitDashboard();
  }
  render() {
    const {
      initStatus,
      web3,
      networkName,
      tokenName,
      tokenAddress,
      distributionAddress,
      tokenList,

      getDistributionInfoLoading,
      getDistributionInfoError,
      distributionInfo,

      getAddressInfoLoading,
      getAddressInfoError,
      addressInfo,

      commitEthSendWindow,
      commitEthSendAmount,
      commitEthSendLoading,
      commitEthSendError,
      commitEthSendTx,
      onChangeWindow,
      onChangeAmount,
      onCommitEthSend,

      onChangeWithdrawWindow,
      onWithdrawSend,
      withdrawWindow,
      withdrawSendLoading,
      withdrawMinedLoading,
      withdrawError,
      withdrawSendTx,
      withdrawMinedRecipt,

    } = this.props;

    const initStatusProps = {
      initStatus,
      web3,
      networkName,
      tokenName,
      tokenAddress,
      distributionAddress,
      tokenList,
    };
    const distributionInfoProps = { getDistributionInfoLoading, getDistributionInfoError, distributionInfo };
    const addressInfoProps = { getAddressInfoLoading, getAddressInfoError, addressInfo };
    const commitProps = {
      commitEthSendWindow,
      commitEthSendAmount,
      commitEthSendLoading,
      commitEthSendError,
      commitEthSendTx,
      onChangeWindow,
      onChangeAmount,
      onCommitEthSend,
    };
    const withdrawProps = {
      onChangeWithdrawWindow,
      onWithdrawSend,
      withdrawWindow,
      withdrawSendLoading,
      withdrawMinedLoading,
      withdrawError,
      withdrawSendTx,
      withdrawMinedRecipt,
    };


    return (
      <Div>
        <Helmet>
          <title>MCoin-PreDistribution-Dapp - Dashboard</title>
          <meta name="description" content="MCoin-PreDistribution-Dapp" />
        </Helmet>
        Dashboard <hr />
        <Web3Status {...initStatusProps} />
        <hr />
        <DistributionInfo {...distributionInfoProps} />
        <hr />
        <AddressInfo {...addressInfoProps} />
        <hr />
        <Commit {...commitProps} />
        <hr />
        <Withdraw {...withdrawProps} />
      </Div>
    );
  }
}

Dashboard.propTypes = {
  dispatch: PropTypes.func,

  onInitDashboard: PropTypes.func,

  initStatus: PropTypes.string,
  web3: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  networkName: PropTypes.string,
  tokenName: PropTypes.string,
  tokenAddress: PropTypes.string,
  distributionAddress: PropTypes.string,
  tokenList: PropTypes.array,

  getDistributionInfoLoading: PropTypes.bool,
  getDistributionInfoError: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  distributionInfo: PropTypes.object,

  getAddressInfoLoading: PropTypes.bool,
  getAddressInfoError: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  addressInfo: PropTypes.object,

  commitEthSendWindow: PropTypes.number,
  commitEthSendAmount: PropTypes.number,
  commitEthSendLoading: PropTypes.bool,
  commitEthSendError: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  commitEthSendTx: PropTypes.string,
  onChangeWindow: PropTypes.func,
  onChangeAmount: PropTypes.func,
  onCommitEthSend: PropTypes.func,

  onChangeWithdrawWindow: PropTypes.func,
  onWithdrawSend: PropTypes.func,
  withdrawWindow: PropTypes.number,
  withdrawSendLoading: PropTypes.bool,
  withdrawMinedLoading: PropTypes.bool,
  withdrawError: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  withdrawSendTx: PropTypes.string,
  withdrawMinedRecipt: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({

  initStatus: makeSelectInitStatus(),
  web3: makeSelectWeb3(),
  networkName: makeSelectNetworkName(),
  tokenName: makeSelectTokenName(),
  tokenAddress: makeSelectTokenAddress(),
  distributionAddress: makeSelectDistributionAddress(),
  tokenList: makeSelectTokenList(),

  getDistributionInfoLoading: makeSelectGetDistributionInfoLoading(),
  getDistributionInfoError: makeSelectGetDistributionInfoError(),
  distributionInfo: makeSelectDistributionInfo(),

  getAddressInfoLoading: makeSelectGetAddressInfoLoading(),
  getAddressInfoError: makeSelectGetAddressInfoError(),
  addressInfo: makeSelectAddressInfo(),

  commitEthSendWindow: makeSelectCommitEthSendWindow(),
  commitEthSendAmount: makeSelectCommitEthSendAmount(),
  commitEthSendLoading: makeSelectCommitEthSendLoading(),
  commitEthSendError: makeSelectCommitEthSendError(),
  commitEthSendTx: makeSelectCommitEthSendTx(),

  withdrawWindow: makeSelectWithdrawWindow(),
  withdrawSendLoading: makeSelectWithdrawSendLoading(),
  withdrawMinedLoading: makeSelectWithdrawMinedLoading(),
  withdrawError: makeSelectWithdrawError(),
  withdrawSendTx: makeSelectWithdrawSendTx(),
  withdrawMinedRecipt: makeSelectWithdrawMinedRecipt(),

  withdrawAllSendLoading: makeSelectWithdrawAllSendLoading(),
  withdrawAllMinedLoading: makeSelectWithdrawAllMinedLoading(),
  withdrawAllError: makeSelectWithdrawAllError(),
  withdrawAllSendTx: makeSelectWithdrawAllSendTx(),
  withdrawAllMinedRecipt: makeSelectWithdrawAllMinedRecipt(),
});

function mapDispatchToProps(dispatch) {
  return {
    onInitDashboard: () => {
      dispatch(initDashboard());
    },
    onChangeWindow: (value) => {
      dispatch(changeWindow(value));
    },
    onChangeAmount: (value) => {
      dispatch(changeAmount(value));
    },
    onCommitEthSend: () => {
      dispatch(commitEthSend());
    },
    onChangeWithdrawWindow: (value) => {
      dispatch(changeWithdrawWindow(value));
    },
    onWithdrawSend: () => {
      dispatch(withdrawSend());
    },
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'dashboard', reducer });
const withSaga = injectSaga({ key: 'dashboard', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect
)(Dashboard);
