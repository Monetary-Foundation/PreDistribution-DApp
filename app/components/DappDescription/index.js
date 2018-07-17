/**
*
* DappDescription
*
*/

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { Div } from 'components/DistributionInfo/common';


function DappDescription() {
  return (
    <Div>
      <b>DApp Description:</b> a constant amount of tokens distributed every end of window among all participants in proportion to their commitment.
      <a target="_blank" rel="noopener" href="https://medium.com/monetary-protocol/monetarycoin-distribution-how-it-works-how-to-use-the-app-2f55afc79427"> Read more</a>
    </Div>
  );
}

DappDescription.propTypes = {

};

export default DappDescription;
