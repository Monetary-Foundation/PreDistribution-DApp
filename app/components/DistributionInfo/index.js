/**
*
* DistributionInfo
*
*/

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import WindowCountdown from 'components/WindowCountdown';

function DistributionInfo(props) {
  const { getDistributionInfoLoading, getDistributionInfoError, distributionInfo } = props;

  if (getDistributionInfoLoading) {
    return <div> getDistributionInfoLoading ....</div>;
  }

  if (getDistributionInfoError) {
    return <div> {getDistributionInfoError} </div>;
  }

  if (distributionInfo) {
    const windowCountdownProps = {
      timestamp: distributionInfo.timestamp,
      startTimestamp: Number(distributionInfo.startTimestamp),
      windowLenght: Number(distributionInfo.windowLenght),
    };
    // const { totals } = distributionInfo;
    delete distributionInfo.totals;
    return (
      <div>
        <WindowCountdown {...windowCountdownProps} />
        {/* DistributionInfo component <pre> {distributionInfo && JSON.stringify(distributionInfo, 0, 0)}</pre> */}
        DistributionInfo component <br /> {distributionInfo && JSON.stringify(distributionInfo, 0, 2)} <br />
        totals: {/* totals && JSON.stringify(totals, 0, 0) */}
      </div>
    );
  }
  return null;
}

DistributionInfo.propTypes = {
  getDistributionInfoLoading: PropTypes.bool,
  getDistributionInfoError: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  distributionInfo: PropTypes.object,
};

export default DistributionInfo;
