/**
*
* SendLoadingIndicator
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Icon, Tooltip } from 'antd';

const SpanS = styled.span`
  margin: 20px;
  position: relative;
  /* Adjust these values accordingly */
  top: 5px;
  left: 5px;
}
`;

function SendLoadingIndicator(props) {
  const { loading, error, tx } = props;
  if (error) {
    return (
      <SpanS>
        <Icon type="close-circle-o" style={{ fontSize: 25, color: '#ff0000' }} />
      </SpanS>
    );
  }

  if (loading) {
    return (
      <SpanS>
        <Tooltip placement="bottom" title="Please approve/decline using Metamask/web3 browser">
          <Icon type="loading" style={{ fontSize: 30, color: '#08c' }} />
        </Tooltip>
      </SpanS>
    );
  }

  if (tx) {
    return (
      <SpanS>
        <Tooltip placement="bottom" title="Transcation sent successfully">
          <b><Icon type="check" style={{ fontSize: 25, color: '#57e013' }} /></b>
        </Tooltip>
      </SpanS>
    );
  }
  return null;
}

SendLoadingIndicator.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  tx: PropTypes.string,
};

export default SendLoadingIndicator;
