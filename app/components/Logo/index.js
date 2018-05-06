/**
*
* Logo
*
*/

import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import { website } from 'utils/constants';

import DAppLogo from './MC_256_transper.png';

const Div = styled.div`
  height: 80px;
  font-size: 18px;
  line-height: 80px; 
  overflow-y: hidden
`;

const Img = styled.img`
  height: 60px;
  line-height: 80px;
  margin-right: 10px;
`;

function Logo() {
  return (
    <Div>
      <Img alt="logo" src={DAppLogo} />
      <a href={website}>
        MCoin Pre-Distribution DApp
      </a>
    </Div>
  );
}

Logo.propTypes = {

};

export default Logo;
