/**
*
* PageFooter
*
*/

import React from 'react';
import { github } from 'utils/constants';
import { Row, Col } from 'antd';
import styled from 'styled-components';

import { StickyFooter } from './sticky';

// import { version } from '../../../package.json';

const version = '0.2.0';

const Footer = StickyFooter.extend`
  textAlign: center;
  background: #efeeee;
  color: #5a5a5a;
  padding: 10px;
  font-size: 14px;
`;

const Span = styled.span`
  color: #b9b9b9;
  margin-top:3px;
`;

function PageFooter() {
  return (
    <Footer>
      <Row>
        <Col sm={{ span: 11, offset: 1 }} xs={24}>
          <a href={github} target="_blank" rel="noopener">
            MonetaryCoin on Github
          </a> v{version}<br />
          Created using: web3@1.0, React.js, Ant design...
        </Col>

        <Span>
          <Col sm={12} xs={24}>
            <a target="_blank" rel="noopener" href="https://monetarycoin.org">MonetaryCoin Homepage</a><br />
            The Monetary Foundation ©2018
          </Col>
        </Span>

      </Row>
    </Footer>
  );
}

PageFooter.propTypes = {

};

export default PageFooter;
