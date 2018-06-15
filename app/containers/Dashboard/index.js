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
      tokenSymbol,
      tokenAddress,
      distributionAddress,
      tokenList,
      onInitDashboard,

      onGetDistributionInfo,
      getDistributionInfoLoading,
      getDistributionInfoError,

      distributionInfo,
      totalsMap,
      currentWindow,
      totalWindows,

      getAddressInfoLoading,
      getAddressInfoError,
      addressInfo,

      commitEthSendWindow,
      commitEthSendAmount,

      commitEthSendLoading,
      commitEthError,
      commitEthSendTx,
      commitEthMinedLoading,
      commitEthMinedRecipt,
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
      networkId,
      networkName,
      tokenName,
      tokenSymbol,
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
      tokenSymbol,
      tokenAddress,
      distributionAddress,
      tokenList,
    };
    const distributionInfoProps = {
      web3,
      tokenName,
      tokenSymbol,
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
      networkId,
    };
    const commitProps = {
      commitEthSendWindow,
      commitEthSendAmount,
      commitEthSendLoading,
      commitEthError,
      commitEthSendTx,
      commitEthMinedLoading,
      commitEthMinedRecipt,
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
      totalsMap,
      totals: distributionInfo && distributionInfo.totals,
      days: 181,
    };


    return (
      <div>
        <Helmet>
          <title>MonetaryCoin Distribution DApp</title>
          <meta name="description" content=">MonetaryCoin Distribution DApp" />
        </Helmet>

        <Content>
          <Header {...headerProps} />
          <Row type="flex" align="middle">
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
  tokenSymbol: PropTypes.string,
  tokenAddress: PropTypes.string,
  distributionAddress: PropTypes.string,
  tokenList: PropTypes.array,

  onGetDistributionInfo: PropTypes.func,
  getDistributionInfoLoading: PropTypes.bool,
  getDistributionInfoError: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),

  distributionInfo: PropTypes.object,
  totalsMap: PropTypes.array,
  currentWindow: PropTypes.number,
  totalWindows: PropTypes.number,

  getAddressInfoLoading: PropTypes.bool,
  getAddressInfoError: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  addressInfo: PropTypes.object,

  commitEthSendWindow: PropTypes.number,
  commitEthSendAmount: PropTypes.number,

  commitEthSendLoading: PropTypes.bool,
  commitEthError: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  commitEthSendTx: PropTypes.string,
  commitEthMinedLoading: PropTypes.bool,
  commitEthMinedRecipt: PropTypes.object,

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
  tokenSymbol: makeSelectTokenSymbol(),
  tokenAddress: makeSelectTokenAddress(),
  distributionAddress: makeSelectDistributionAddress(),
  tokenList: makeSelectTokenList(),

  getDistributionInfoLoading: makeSelectGetDistributionInfoLoading(),
  getDistributionInfoError: makeSelectGetDistributionInfoError(),

  distributionInfo: makeSelectDistributionInfo(),
  totalsMap: makeSelectTotalsMap(),
  currentWindow: makeSelectCurrentWindow(),
  totalWindows: makeSelectTotalWindows(),

  getAddressInfoLoading: makeSelectGetAddressInfoLoading(),
  getAddressInfoError: makeSelectGetAddressInfoError(),
  addressInfo: makeSelectAddressInfo(),

  commitEthSendWindow: makeSelectCommitEthSendWindow(),
  commitEthSendAmount: makeSelectCommitEthSendAmount(),

  commitEthSendLoading: makeSelectCommitEthSendLoading(),
  commitEthMinedLoading: makeSelectCommitEthMinedLoading(),
  commitEthError: makeSelectCommitEthError(),
  commitEthSendTx: makeSelectCommitEthSendTx(),
  commitEthMinedRecipt: makeSelectCommitEthMinedRecipt(),

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
