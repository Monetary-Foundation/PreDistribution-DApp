/**
*
* DistributionInfo
*
*/

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import CurrentWindow from 'components/CurrentWindow';
import WindowCountdown from 'components/WindowCountdown';
import AllocatedForWindow from 'components/AllocatedForWindow';
import CommitedForWindow from 'components/CommitedForWindow';
import PriceForWindow from 'components/PriceForWindow';

import { Col, Spin } from 'antd';

function DistributionInfo(props) {
  const { web3, tokenName, getDistributionInfoLoading, getDistributionInfoError, distributionInfo, onGetDistributionInfo } = props;

  if (getDistributionInfoLoading) {
    return (
      <Col sm={{ span: 3 }} xs={{ span: 23, offset: 1 }}>
        <Spin
          spinning={getDistributionInfoLoading}
          style={{ marginTop: 80, position: 'static' }}
          size="large"
          tip="Loading distribution info..."
        >
          <br /> <br />
        </Spin>
      </Col>);
  }

  if (getDistributionInfoError) {
    return <div> {getDistributionInfoError} </div>;
  }

  if (distributionInfo) {
    const windowCountdownProps = {
      onGetDistributionInfo,
      remainingTime: Number(distributionInfo.remainingTime),
    };

    const currentWindowProps = {
      currentWindow: Number(distributionInfo.currentWindow),
      totalWindows: Number(distributionInfo.totalWindows),
    };

    const allocatedForWindowProps = {
      web3,
      tokenName,
      allocation: distributionInfo.allocation,
    };

    const commitedForWindowProps = {
      web3,
      currentWindow: Number(distributionInfo.currentWindow),
      totals: distributionInfo.totals,
    };

    const priceForWindowProps = {
      web3,
      currentWindow: distributionInfo.currentWindow,
      totals: distributionInfo.totals,
      firstPeriodWindows: distributionInfo.firstPeriodWindows,
      secondPeriodWindows: distributionInfo.secondPeriodWindows,
      firstPeriodSupply: distributionInfo.firstPeriodSupply,
      secondPeriodSupply: distributionInfo.secondPeriodSupply,
    };

    // const { totals } = distributionInfo;
    // delete distributionInfo.totals;
    return (
      <Col sm={{ span: 10, offset: 1 }} xs={{ span: 23, offset: 1 }}>
        <CurrentWindow {...currentWindowProps} />
        <WindowCountdown {...windowCountdownProps} />
        <CommitedForWindow {...commitedForWindowProps} />
        <AllocatedForWindow {...allocatedForWindowProps} />
        <PriceForWindow {...priceForWindowProps} />
        {/* DistributionInfo component <pre> {distributionInfo && JSON.stringify(distributionInfo, 0, 0)}</pre>
              DistributionInfo component <br /> {distributionInfo && JSON.stringify(distributionInfo, 0, 2)} <br /> */}
        {/* totals:  totals && JSON.stringify(totals, 0, 0) */}
      </Col>
    );
  }
  return null;
}

DistributionInfo.propTypes = {
  web3: PropTypes.object,
  tokenName: PropTypes.string,
  onGetDistributionInfo: PropTypes.func,
  getDistributionInfoLoading: PropTypes.bool,
  getDistributionInfoError: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  distributionInfo: PropTypes.object,
};

export default DistributionInfo;
