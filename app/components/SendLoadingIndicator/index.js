/**
*
* SendLoadingIndicator
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Icon } from 'antd';

const SpanS = styled.span`
  margin: 40px;
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
        <Icon type="loading" style={{ fontSize: 30, color: '#08c' }} />
      </SpanS>
    );
  }

  if (tx) {
    return (
      <SpanS>
        <b><Icon type="check" style={{ fontSize: 25, color: '#57e013' }} /></b>
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
