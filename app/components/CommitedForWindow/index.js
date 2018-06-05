/**
*
* CommitedForWindow
*
*/

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { Div, BigSpan } from 'components/DistributionInfo/common';

function CommitedForWindow(props) {
  const { web3, currentWindow, totals } = props;

  return (
    <Div>
      Commited for current window<br />
      <BigSpan> {currentWindow < 365 ? web3.utils.fromWei(totals[currentWindow], 'ether') : 0} ETH </BigSpan>
    </Div>
  );
}

CommitedForWindow.propTypes = {
  currentWindow: PropTypes.number,
  totals: PropTypes.array,
  web3: PropTypes.object,
};

export default CommitedForWindow;
