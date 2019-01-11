/**
*
* DistributionInfo
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// import CurrentWindow from 'components/CurrentWindow';
// import WindowCountdown from 'components/WindowCountdown';
// import AllocatedForWindow from 'components/AllocatedForWindow';
// import CommitedForWindow from 'components/CommitedForWindow';
// import PriceForWindow from 'components/PriceForWindow';
import DappDescription from 'components/DappDescription';
import TotalRaised from 'components/TotalRaised';

import { Col, Spin } from 'antd';

const HR = styled.hr`
  width: 30%;
  margin-left: 0;
`;

function DistributionInfo(props) {
  const {
    // web3,
    tokenSymbol, getDistributionInfoLoading, getDistributionInfoError, distributionInfo,
    // onGetDistributionInfo,
    totalsSum,
  } = props;

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
    // const windowCountdownProps = {
    //   onGetDistributionInfo,
    //   remainingTime: Number(distributionInfo.remainingTime),
    // };

    // const currentWindowProps = {
    //   currentWindow: Number(distributionInfo.currentWindow),
    //   totalWindows: Number(distributionInfo.totalWindows),
    // };

    // const allocatedForWindowProps = {
    //   web3,
    //   tokenSymbol,
    //   allocation: distributionInfo.allocation,
    // };

    // const commitedForWindowProps = {
    //   web3,
    //   currentWindow: Number(distributionInfo.currentWindow),
    //   totals: distributionInfo.totals,
    // };

    // const priceForWindowProps = {
    //   web3,
    //   currentWindow: distributionInfo.currentWindow,
    //   totals: distributionInfo.totals,
    //   firstPeriodWindows: distributionInfo.firstPeriodWindows,
    //   secondPeriodWindows: distributionInfo.secondPeriodWindows,
    //   firstPeriodSupply: distributionInfo.firstPeriodSupply,
    //   secondPeriodSupply: distributionInfo.secondPeriodSupply,
    // };

    const totalRaisedProps = {
      totalsSum,
      tokenSymbol,
    };

    // const { totals } = distributionInfo;
    // delete distributionInfo.totals;
    return (
      <Col sm={{ span: 10, offset: 1 }} xs={{ span: 23, offset: 1 }}>
        {/* <CurrentWindow {...currentWindowProps} />
        <WindowCountdown {...windowCountdownProps} /> */}
        <h2>Pre-destribution concluded</h2><br />
        <h2>Please withdraw tokens</h2>
        {/* <CommitedForWindow {...commitedForWindowProps} />
        <AllocatedForWindow {...allocatedForWindowProps} />
        <PriceForWindow {...priceForWindowProps} /> */}
        <br /><br /><br /><br />
        <HR />
        <TotalRaised {...totalRaisedProps} />
        <DappDescription />
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
  tokenSymbol: PropTypes.string,
  onGetDistributionInfo: PropTypes.func,
  getDistributionInfoLoading: PropTypes.bool,
  getDistributionInfoError: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  distributionInfo: PropTypes.object,
  totalsSum: PropTypes.string,
};

export default DistributionInfo;
