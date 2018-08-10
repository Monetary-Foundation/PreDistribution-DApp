/**
*
* TotalRaised
*
*/

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { Div, BigSpan } from 'components/DistributionInfo/common';


function TotalRaised(props) {
  const { totalsSum, tokenSymbol } = props;
  return (
    <Div>
      <b>Total raised for {tokenSymbol}: </b><br />
      <BigSpan> {totalsSum} Ether </BigSpan>
    </Div>
  );
}

TotalRaised.propTypes = {
  totalsSum: PropTypes.string,
  tokenSymbol: PropTypes.string,
};

export default TotalRaised;
