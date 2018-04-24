/**
*
* AddressInfo
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Row, Col } from 'antd';
import CommitLayout from 'components/CommitLayout';
import WithdrawLayout from 'components/WithdrawLayout';

const BigSpan = styled.span`
  color: #8e8e8e;
  font-size: 150%;
`;

function AddressInfo(props) {
  const { getAddressInfoLoading, getAddressInfoError, addressInfo, ...rest } = props;

  if (getAddressInfoLoading) {
    return <div> getAddressInfoLoading ....</div>;
  }

  if (getAddressInfoError) {
    return <div> {getAddressInfoError} </div>;
  }

  // const { totals } = distributionInfo;
  // delete distributionInfo.totals;
  const address = addressInfo && addressInfo.address;
  const commitments = addressInfo && addressInfo.commitments;
  const rewards = addressInfo && addressInfo.rewards;
  return (
    <div>
      {/* DistributionInfo component <pre> {distributionInfo && JSON.stringify(distributionInfo, 0, 0)}</pre> */}
      {/* AddressInfo: <br />
       addressInfo && JSON.stringify(addressInfo, 0, 2) */}
      <br />
      <Row type="flex" align="left" >
        <Col sm={{ span: 10, offset: 1 }} xs={{ span: 23, offset: 1 }}>
          <h2> My Account </h2>
          <h4> Address: </h4> <BigSpan> {address && address.toUpperCase()} </BigSpan>
          <br />
        </Col>
      </Row>
      <CommitLayout {...rest} commitments={commitments} />
      <WithdrawLayout {...rest} rewards={rewards} />

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
