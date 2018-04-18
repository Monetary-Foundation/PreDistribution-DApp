/**
*
* NetworkIndicator
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Span = styled.span`
  color: #d4d4d4;
`;

function NetworkIndicator(props) {
  const { networkName } = props;
  return (
    <Span>
      {networkName}
    </Span>
  );
}

NetworkIndicator.propTypes = {
  networkName: PropTypes.string,
};

export default NetworkIndicator;
