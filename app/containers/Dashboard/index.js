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
// import styled from 'styled-components';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';

import { Row } from 'antd';

import Header from 'components/Header';
import Web3Status from 'components/Web3Status';
import DistributionInfo from 'components/DistributionInfo';

import TotalsInfo from 'components/TotalsInfo';

import AddressInfo from 'components/AddressInfo';

import PageFooter from 'components/PageFooter';
import { Content } from 'components/PageFooter/sticky';


import reducer from './reducer';
import saga from './saga';
import {
  initDashboard,
  changeWindow,
  changeAmount,
  commitEthSend,

  getDistributionInfo,
  changeWithdrawWindow,
  withdrawSend,
} from './actions';

import {
  makeSelectInitStatus,
  makeSelectWeb3,
  makeSelectIsWeb3Browser,
  makeSelectNetworkId,
  makeSelectNetworkName,
  makeSelectTokenName,
  makeSelectTokenAddress,
  makeSelectDistributionAddress,
  makeSelectTokenList,

  makeSelectGetDistributionInfoLoading,
  makeSelectGetDistributionInfoError,

  makeSelectDistributionInfo,
  makeSelectCurrentWindow,
  makeSelectTotalWindows,

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


export class Dashboard extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    this.props.onInitDashboard();
  }
  render() {
    const {
      initStatus,
      web3,
      isWeb3Browser,
      networkId,
      networkName,
      tokenName,
      tokenAddress,
      distributionAddress,
      tokenList,
      onInitDashboard,

      onGetDistributionInfo,
      getDistributionInfoLoading,
      getDistributionInfoError,

      distributionInfo,
      currentWindow,
      totalWindows,

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

    const headerProps = {
      initStatus,
      networkName,
      tokenName,
      tokenAddress,
      distributionAddress,
      tokenList,
      onInitDashboard,
    };
    const initStatusProps = {
      initStatus,
      web3,
      networkId,
      networkName,
      tokenName,
      tokenAddress,
      distributionAddress,
      tokenList,
    };
    const distributionInfoProps = {
      web3,
      tokenName,
      onGetDistributionInfo,
      getDistributionInfoLoading,
      getDistributionInfoError,
      distributionInfo,
    };

    const addressInfoProps = { currentWindow, totalWindows };

    const addressProps = {
      getAddressInfoLoading,
      getAddressInfoError,
      addressInfo,
      isWeb3Browser,
    };
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
    Object.assign(addressInfoProps, addressProps, commitProps, withdrawProps);

    const totalsInfoProps = {
      totals: distributionInfo && distributionInfo.totals,
      days: 181,
    };


    return (
      <div>
        <Helmet>
          <title>MonetaryCoin Pre Distribution DApp</title>
          <meta name="description" content=">MonetaryCoin Pre Distribution DApp" />
        </Helmet>

        <Content>
          <Header {...headerProps} />
          <Row>
            <Web3Status {...initStatusProps} />
            <DistributionInfo {...distributionInfoProps} />
          </Row>
          <TotalsInfo {...totalsInfoProps} />
          <AddressInfo {...addressInfoProps} />
        </Content>
        <PageFooter />

      </div>
    );
  }
}

Dashboard.propTypes = {
  dispatch: PropTypes.func,

  onInitDashboard: PropTypes.func,

  initStatus: PropTypes.string,
  web3: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  isWeb3Browser: PropTypes.bool,
  networkId: PropTypes.number,
  networkName: PropTypes.string,
  tokenName: PropTypes.string,
  tokenAddress: PropTypes.string,
  distributionAddress: PropTypes.string,
  tokenList: PropTypes.array,

  onGetDistributionInfo: PropTypes.func,
  getDistributionInfoLoading: PropTypes.bool,
  getDistributionInfoError: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),

  distributionInfo: PropTypes.object,
  currentWindow: PropTypes.number,
  totalWindows: PropTypes.number,

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
  isWeb3Browser: makeSelectIsWeb3Browser(),
  networkId: makeSelectNetworkId(),
  networkName: makeSelectNetworkName(),
  tokenName: makeSelectTokenName(),
  tokenAddress: makeSelectTokenAddress(),
  distributionAddress: makeSelectDistributionAddress(),
  tokenList: makeSelectTokenList(),

  getDistributionInfoLoading: makeSelectGetDistributionInfoLoading(),
  getDistributionInfoError: makeSelectGetDistributionInfoError(),

  distributionInfo: makeSelectDistributionInfo(),
  currentWindow: makeSelectCurrentWindow(),
  totalWindows: makeSelectTotalWindows(),

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
    onInitDashboard: (tokenName) => {
      dispatch(initDashboard(tokenName));
    },
    onGetDistributionInfo: () => {
      dispatch(getDistributionInfo());
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
