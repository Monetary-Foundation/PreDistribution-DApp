/**
*
* AllocatedForWindow
*
*/

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { Div, BigSpan } from 'components/DistributionInfo/common';
import { formatNumber } from 'utils/common';

function AllocatedForWindow(props) {
  const { web3, tokenSymbol, allocation } = props;

  return (
    <Div>
      Allocated for current window<br />
      <BigSpan> {allocation ? formatNumber(parseInt(web3.utils.fromWei(allocation, 'ether'), 10).toFixed(0)) : 0} {tokenSymbol} </BigSpan>
    </Div>
  );
}

AllocatedForWindow.propTypes = {
  allocation: PropTypes.string,
  tokenSymbol: PropTypes.string,
  web3: PropTypes.object,
};

export default AllocatedForWindow;
