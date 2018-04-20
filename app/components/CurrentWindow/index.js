/**
*
* CurrentWindow
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const BigSpan = styled.span`
  color: #444444;
  font-size: 200%;
`;

const SmallSpan = styled.span`
  color: #8e8e8e;
  font-size: 110%;
`;

function CurrentWindow(props) {
  const { currentWindow, totalWindows } = props;
  return (
    <div>
      <SmallSpan>
        Window number <BigSpan>{currentWindow}</BigSpan>/{totalWindows}
      </SmallSpan>
    </div>
  );
}

CurrentWindow.propTypes = {
  currentWindow: PropTypes.number.isRequired,
  totalWindows: PropTypes.number.isRequired,
};

export default CurrentWindow;
