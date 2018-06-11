/**
*
* Instructions
*
*/

import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Row, Col, Timeline } from 'antd';

const Item = Timeline.Item;

const RowS = styled(Row)`
  margin-top:1.4em;
`;

const TimelineS = styled(Timeline)`
  margin-top:2em;
`;

function Instructions() {
  return (
    <RowS type="flex" align="left" >
      <Col xs={{ span: 22, offset: 1 }} >
        <h2> Distribution instructions </h2>
        <TimelineS>
          <Item color="grey">Please read
            <a target="_blank" rel="noopener" href="https://monetarycoin.org/distribution"> MonetaryCoin Distribution Details</a></Item>
          <Item color="grey"><b>Test</b> this procces by selecting <b>Ropsten Test Network</b> from Metamask/Web3 browser before commiting real Ether</Item>
          <Item>Select window and <b>commit</b> Ether</Item>
          <Item color="red"><b>Wait</b> for window to close for final price setting</Item>
          <Item color="green"><b>Withdraw</b> tokens for closed window</Item>
        </TimelineS>
      </Col>
    </RowS>
  );
}

Instructions.propTypes = {

};

export default Instructions;
