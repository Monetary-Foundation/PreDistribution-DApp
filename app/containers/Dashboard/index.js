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
import SetStorageStatus from 'components/SetStorageStatus';
import GetStorageStatus from 'components/GetStorageStatus';
import Btn from './btn';

import reducer from './reducer';
import saga from './saga';
import {
  initDashboard,
  setStorageValue,
  getStorageValue,

  changeWindow,
  changeAmount,
  commitEthSend,
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

  makeSelectCommitEthSendWindow,
  makeSelectCommitEthSendAmount,
  makeSelectCommitEthSendLoading,
  makeSelectCommitEthSendError,
  makeSelectCommitEthSendTx,


  makeSelectSetStorageValue,
  makeSelectSetStorageLoading,
  makeSelectSetStorageError,
  makeSelectStorageValue,
  makeSelectGetStorageValueLoading,
  makeSelectGetStorageValueError,
} from './selectors';


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

      commitEthSendWindow,
      commitEthSendAmount,
      commitEthSendLoading,
      commitEthSendError,
      commitEthSendTx,
      onChangeWindow,
      onChangeAmount,
      onCommitEthSend,

      setStorageValue,
      setStorageLoading,
      setStorageError,
      storageValue,
      getStorageValueLoading,
      getStorageValueError,

      onSetStorageValue,
      onGetStorageValue,
    } = this.props;

    const distributionInfoProps = { getDistributionInfoLoading, getDistributionInfoError, distributionInfo };
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

    const setStorageStatusProps = { setStorageValue, setStorageLoading, setStorageError };
    const getStorageStatusProps = { storageValue, getStorageValueLoading, getStorageValueError };

    const initStatusProps = {
      initStatus,
      web3,
      networkName,
      tokenName,
      tokenAddress,
      distributionAddress,
      tokenList,
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
        <Commit {...commitProps} />
        <br />
        <Btn className="btn" onClick={() => onSetStorageValue(99)}>Set Storage</Btn>
        <SetStorageStatus {...setStorageStatusProps} />
        <Btn className="btn" onClick={() => onGetStorageValue()}>Get Storage</Btn>
        <GetStorageStatus {...getStorageStatusProps} />
      </Div>
    );
  }
}

Dashboard.propTypes = {
  dispatch: PropTypes.func.isRequired,

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

  commitEthSendWindow: PropTypes.number,
  commitEthSendAmount: PropTypes.number,
  commitEthSendLoading: PropTypes.bool,
  commitEthSendError: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  commitEthSendTx: PropTypes.string,
  onChangeWindow: PropTypes.func,
  onChangeAmount: PropTypes.func,
  onCommitEthSend: PropTypes.func,

  setStorageValue: PropTypes.number,
  setStorageLoading: PropTypes.bool,
  setStorageError: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  storageValue: PropTypes.oneOfType([PropTypes.number]),
  getStorageValueLoading: PropTypes.bool,
  getStorageValueError: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),

  onInitDashboard: PropTypes.func,
  onSetStorageValue: PropTypes.func,
  onGetStorageValue: PropTypes.func,
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

  commitEthSendWindow: makeSelectCommitEthSendWindow(),
  commitEthSendAmount: makeSelectCommitEthSendAmount(),
  commitEthSendLoading: makeSelectCommitEthSendLoading(),
  commitEthSendError: makeSelectCommitEthSendError(),
  commitEthSendTx: makeSelectCommitEthSendTx(),

  setStorageValue: makeSelectSetStorageValue(),
  setStorageLoading: makeSelectSetStorageLoading(),
  setStorageError: makeSelectSetStorageError(),
  storageValue: makeSelectStorageValue(),
  getStorageValueLoading: makeSelectGetStorageValueLoading(),
  getStorageValueError: makeSelectGetStorageValueError(),

});

function mapDispatchToProps(dispatch) {
  return {
    onInitDashboard: () => {
      dispatch(initDashboard());
    },
    onSetStorageValue: (val) => {
      dispatch(setStorageValue(val));
    },
    onGetStorageValue: () => {
      dispatch(getStorageValue());
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
