/**
*
* PriceForWindow
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const BigSpan = styled.span`
  color: #444444;
  font-size: 160%;
`;

const SmallSpan = styled.span`
  color: #8e8e8e;
  font-size: 110%;
`;

const SmallerSpan = styled.span`
  color: #8e8e8e;
  font-size: 70%;
`;

function PriceForWindow(props) {
  const {
    web3,
    currentWindow,
    totals,
    firstPeriodWindows,
    secondPeriodWindows,
    firstPeriodSupply,
    secondPeriodSupply,
  } = props;

  const BN = web3.utils.BN;

  const isFirstPeriod = Number(currentWindow) < Number(firstPeriodWindows);

  const dailySupply = isFirstPeriod ?
    new BN(firstPeriodSupply).div(new BN(firstPeriodWindows)) :
    new BN(secondPeriodSupply).div(new BN(secondPeriodWindows));

  const currentWindowEth = new BN(totals[currentWindow]);
  // console.log(currentWindowEth.toString());
  // console.log(dailySupply.toString());
  // console.log(currentWindowEth.gt(new BN(0)));
  // const price = currentWindowEth.gt(new BN(0)) ? currentWindowEth.div(dailySupply) : 0;
  const inversePrice = currentWindowEth.gt(new BN(0)) ? dailySupply.div(currentWindowEth) : 0;

  const price = inversePrice !== 0 && inversePrice.gt(new BN(0)) ? 1.0 / inversePrice : 0;

  return (
    <div>
      <br />
      <SmallSpan> Current Price Per Token </SmallSpan> <br />
      <BigSpan> {price.toString()} ETH </BigSpan> <SmallSpan> ({inversePrice.toString()} tokens per ETH) </SmallSpan><br />
      <SmallerSpan> *Price might increase until end of window </SmallerSpan> <br />
    </div>
  );
}

PriceForWindow.propTypes = {
  web3: PropTypes.object,
  currentWindow: PropTypes.string,
  totals: PropTypes.array,
  firstPeriodWindows: PropTypes.string,
  secondPeriodWindows: PropTypes.string,
  firstPeriodSupply: PropTypes.string,
  secondPeriodSupply: PropTypes.string,
};

export default PriceForWindow;
