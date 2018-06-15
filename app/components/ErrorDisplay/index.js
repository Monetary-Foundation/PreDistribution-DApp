/**
*
* ErrorDisplay
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Span = styled.span`
  color: red;
`;

function ErrorDisplay(props) {
  const { error } = props;
  if (error) {
    return (
      <div>
        <Span> Error:</Span> {error}
      </div>
    );
  }
  return null;
}


ErrorDisplay.propTypes = {
  error: PropTypes.string,
};

export default ErrorDisplay;
