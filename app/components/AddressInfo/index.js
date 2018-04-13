/**
*
* AddressInfo
*
*/

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

function AddressInfo(props) {
  const { getAddressInfoLoading, getAddressInfoError, addressInfo } = props;

  if (getAddressInfoLoading) {
    return <div> getAddressInfoLoading ....</div>;
  }

  if (getAddressInfoError) {
    return <div> {getAddressInfoError} </div>;
  }

  // const { totals } = distributionInfo;
  // delete distributionInfo.totals;
  return (
    <div>
      {/* DistributionInfo component <pre> {distributionInfo && JSON.stringify(distributionInfo, 0, 0)}</pre> */}
      AddressInfo: <br />
      {addressInfo && JSON.stringify(addressInfo, 0, 2)} <br />
      {/* totals: {JSON.stringify(totals, 0, 0)} */}
    </div>
  );
}

AddressInfo.propTypes = {
  getAddressInfoLoading: PropTypes.bool,
  getAddressInfoError: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  addressInfo: PropTypes.object,
};

export default AddressInfo;
