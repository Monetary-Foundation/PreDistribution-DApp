/**
*
* AddressInfo
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Row, Col, Spin } from 'antd';
import CommitLayout from 'components/CommitLayout';
import WithdrawLayout from 'components/WithdrawLayout';

const Div = styled.div`
  margin-top: 2%;
`;

const BigSpan = styled.span`
  color: #8e8e8e;
  font-size: 150%;
`;

function AddressInfo(props) {
  const { isWeb3Browser, getAddressInfoLoading, getAddressInfoError, addressInfo, ...rest } = props;

  if (getAddressInfoLoading) {
    return (
      <Spin
        spinning={getAddressInfoLoading}
        style={{ position: 'static' }}
        size="large"
        tip="Loading account info..."
      >
        <br />
        <br />
        <br />
      </Spin>
    );
  }

  if (getAddressInfoError) {
    return <div> {getAddressInfoError} </div>;
  }

  const address = addressInfo && addressInfo.address;
  const commitments = addressInfo && addressInfo.commitments;
  const rewards = addressInfo && addressInfo.rewards;

  if (!isWeb3Browser) {
    return (
      <Div>
        <Row type="flex" align="left" >
          <Col sm={{ span: 22, offset: 1 }} xs={{ span: 23, offset: 1 }}>
            <BigSpan> No web3 browser detected. </BigSpan> <br />
            You can use web3 browser such as Mist, Metamask or Trust wallet to commit Eth and withdraw tokens from this page.
          </Col>
        </Row>
      </Div>
    );
  }

  return (
    <Div>
      <Row type="flex" align="left" >
        <Col sm={{ span: 10, offset: 1 }} xs={{ span: 23, offset: 1 }} style={{ overflowX: 'hidden' }}>
          <h2> My Account </h2>
          <h4> Address: </h4> <BigSpan> {address && address.toUpperCase()} </BigSpan> <br />
        </Col>
      </Row>
      <CommitLayout {...rest} commitments={commitments} />
      <WithdrawLayout {...rest} rewards={rewards} />
    </Div>
  );
}

AddressInfo.propTypes = {
  isWeb3Browser: PropTypes.bool,
  getAddressInfoLoading: PropTypes.bool,
  getAddressInfoError: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  addressInfo: PropTypes.object,
};

export default AddressInfo;
