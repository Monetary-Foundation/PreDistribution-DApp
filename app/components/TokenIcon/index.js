/**
*
* TokenIcon
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Img = styled.img`
  {
    color: #dbd9ff;
    font: 20px Impact;
    text-transform: uppercase;
    height: 130px;

    //margin-left: 60px;
    margin-top: 15px;
    margin-bottom: 10px;
  }
`;

function TokenIcon(props) {
  const { symbol } = props;

  if (!symbol) {
    return null;
  }

  const size = 100;

  const iconPath = `token-icons/${symbol}.png`;

  return (
    <div>
      <Img alt={symbol} src={iconPath} height={size.toString()} />
    </div>
  );
}

TokenIcon.propTypes = {
  symbol: PropTypes.string,
};

export default TokenIcon;

