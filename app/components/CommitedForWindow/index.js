/**
*
* CommitedForWindow
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const BigSpan = styled.span`
  color: #444444;
  font-size: 130%;
`;

const SmallSpan = styled.span`
  color: #8e8e8e;
  font-size: 110%;
`;

function CommitedForWindow(props) {
  const { web3, currentWindow, totals } = props;

  return (
    <div>
      <br />
      <SmallSpan> Commited for current window:</SmallSpan> <BigSpan> {web3.utils.fromWei(totals[currentWindow], 'ether')} ETH </BigSpan>
    </div>
  );
}

CommitedForWindow.propTypes = {
  currentWindow: PropTypes.number,
  totals: PropTypes.array,
  web3: PropTypes.object,
};

export default CommitedForWindow;
