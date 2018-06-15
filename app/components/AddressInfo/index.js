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
import Instructions from 'components/Instructions';


const Div = styled.div`
  padding-top: 2%;
  padding-bottom: 3%;
`;

const BigSpan = styled.span`
  color: #8e8e8e;
  font-size: 1.5em;
`;

const H2s = styled.h2`
  color: red;
  font-size: 1em;
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

  const address = addressInfo && addressInfo.address;
  const commitments = addressInfo && addressInfo.commitments;
  const rewards = addressInfo && addressInfo.rewards;

  if (!isWeb3Browser) {
    return (
      <Div>
        <br /><hr />
        <Row type="flex" align="left" >
          <Col sm={{ span: 22, offset: 1 }} xs={{ span: 22, offset: 1 }}>
            <BigSpan> No web3 browser detected. </BigSpan> <br />
            You can use web3 browser such as Mist, Metamask or Trust wallet to commit Eth and withdraw tokens <b>directly from this page.</b>
          </Col>
        </Row>
      </Div>
    );
  }

  if (getAddressInfoError) {
    // return <div> {getAddressInfoError} </div>;
    return (
      <Div>
        <br /><hr />
        <Row type="flex" align="left" >
          <Col sm={{ span: 22, offset: 1 }} xs={{ span: 22, offset: 1 }}>
            <BigSpan> Web3 browser detected. </BigSpan> <br />
            You can use web3 browser such as Mist, Metamask or Trust wallet to commit Eth and withdraw tokens <b>directly from this page.</b>
            <br /><br />
            <b> {getAddressInfoError} </b> <br />
          </Col>
        </Row>
      </Div>
    );
  }

  const addressComp = address
    ? address.toUpperCase()
    : <H2s> Please unlock wallet and refresh page </H2s>;

  return (
    <Div>
      <br /><hr />
      <Instructions />
      <Row type="flex" align="left" >
        <Col sm={{ span: 10, offset: 1 }} xs={{ span: 22, offset: 1 }} style={{ overflowX: 'hidden' }}>
          <h2> My Account </h2>
          <h4> Address: </h4> <BigSpan> {addressComp} </BigSpan> <br />
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
