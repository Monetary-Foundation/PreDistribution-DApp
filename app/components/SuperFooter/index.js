/**
*
* SuperFooter
*
*/

import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Row, Col } from 'antd';

const RowS = styled(Row)`
  div{
    text-align: center;
    margin-top: 1.3em;
    margin-bottom: 1.3em;
  }
  span {
    font-size: 1.3em;
  }
`;

function SuperFooter() {
  return (
    <RowS type="flex" >
      <Col xs={{ span: 20, offset: 1 }}>
        <span>
          Already got MonetaryCoin?
          Participate in forging new tokens via
          <a target="_blank" rel="noopener" href="https://forging.monetarycoin.io/"> The MonetaryCoin forging Dapp </a>
        </span>
      </Col>
    </RowS>
  );
}

SuperFooter.propTypes = {

};

export default SuperFooter;
