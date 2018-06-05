/**
*
* AllocatedForWindow
*
*/

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { Div, BigSpan } from 'components/DistributionInfo/common';

function AllocatedForWindow(props) {
  const { web3, tokenName, allocation } = props;

  return (
    <Div>
      Allocated for current window<br />
      <BigSpan> {allocation ? parseInt(web3.utils.fromWei(allocation, 'ether'), 10).toFixed(0) : 0} {tokenName} </BigSpan>
    </Div>
  );
}

AllocatedForWindow.propTypes = {
  allocation: PropTypes.string,
  tokenName: PropTypes.string,
  web3: PropTypes.object,
};

export default AllocatedForWindow;
