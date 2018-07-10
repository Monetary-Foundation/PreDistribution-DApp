/**
*
* AmlStatus
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Icon } from 'antd';
import { applicationForm } from 'utils/constants';

const BigSpan = styled.span`
  color: #8e8e8e;
  font-size: 1.5em;
`;

// ['NOT_REGISTRED', 'IN_PROGRESS', 'VERIFIED', 'DENIED','ERROR'];

function AmlStatus(props) {
  const { address, amlStatus } = props;
  const formUrl = address ? `${applicationForm}?eth_address=${address}` : applicationForm;

  if (amlStatus === 'NOT_REGISTRED') {
    return (
      <span>
        <h4> Verification status: </h4>
        <Icon type="close-circle-o" style={{ fontSize: '1.5em', color: 'red' }} />
        <BigSpan> Address not registrated for Mainnet usage</BigSpan>
        <br />Use this
        <a
          href={formUrl}
          title="Token Purchase Application"
          target="_blank"
        >
          <b>{' '}Form </b>
        </a> to register your address by preforming a short AML/KYC procedure.<br />
      </span>
    );
  }
  if (amlStatus === 'IN_PROGRESS') {
    return (
      <span>
        <h4> Verification status: </h4>
        <Icon type="clock-circle" style={{ fontSize: '1.5em', color: '#dede51' }} />
        <BigSpan> Verification in progress</BigSpan>
        <br />The process should complete within few hours <br />
      </span>
    );
  }
  if (amlStatus === 'VERIFIED') {
    return (
      <span>
        <h4> Verification status: </h4>
        <Icon type="check-square" style={{ fontSize: '1.5em', color: '#00c300' }} />
        <BigSpan> Verification successful</BigSpan>
        <br />Address is verified for Mainnet usage<br />
      </span>
    );
  }
  if (amlStatus === 'DENIED') {
    return (
      <span>
        <h4> Verification status: </h4>
        <Icon type="close-circle-o" style={{ fontSize: '1.5em', color: 'red' }} />
        <BigSpan> Application denied</BigSpan>
        <br />Address is not verified for Mainnet usage<br />
      </span>
    );
  }
  return (
    <span>
      <h4> Verification status: </h4>
      <Icon type="close-circle-o" style={{ fontSize: '1.5em', color: 'red' }} />
      <BigSpan> Verification Error</BigSpan>
      <br />Please try again later<br />
    </span>
  );
}

AmlStatus.propTypes = {
  amlStatus: PropTypes.string,
  address: PropTypes.string,
};

export default AmlStatus;
