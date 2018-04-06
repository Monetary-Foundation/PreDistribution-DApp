/**
*
* DistributionInfo
*
*/

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';


function DistributionInfo(props) {
  const { getDistributionInfoLoading, getDistributionInfoError, distributionInfo } = props;

  if (getDistributionInfoLoading) {
    return <div> getDistributionInfoLoading ....</div>;
  }

  if (getDistributionInfoError) {
    return <div> {getDistributionInfoError} </div>;
  }

  return (
    <div>
      DistributionInfo component <pre> {distributionInfo && JSON.stringify(distributionInfo, 0, 2)}</pre>
    </div>
  );
}

DistributionInfo.propTypes = {
  getDistributionInfoLoading: PropTypes.bool,
  getDistributionInfoError: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  distributionInfo: PropTypes.object,
};

export default DistributionInfo;
