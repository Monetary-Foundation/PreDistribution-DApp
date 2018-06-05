/**
*
* CurrentWindow
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import { Div, BigSpan, SmallSpan } from 'components/DistributionInfo/common';
// import styled from 'styled-components';

function CurrentWindow(props) {
  const { currentWindow, totalWindows } = props;
  return (
    <Div>
      <SmallSpan>
        Window # <BigSpan>{currentWindow}</BigSpan>/{totalWindows - 1} will close in
      </SmallSpan>
    </Div>
  );
}

CurrentWindow.propTypes = {
  currentWindow: PropTypes.number.isRequired,
  totalWindows: PropTypes.number.isRequired,
};

export default CurrentWindow;
