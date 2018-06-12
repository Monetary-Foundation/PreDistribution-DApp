/**
*
* Header
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Row, Col } from 'antd';

import Logo from 'components/Logo';
import NetworkIndicator from 'components/NetworkIndicator';
import ContractSelector from 'components/ContractSelector';

const HeaderWrapped = styled.header`
  transition: opacity 0.5s;
  margin-bottom: 30px;
  padding: 0;
  width: 100%;
  font-size: 16px;
`;


function Header(props) {
  const {
    // initStatus,
    // networkName,
    networkId,
    tokenName,
    tokenSymbol,
    // tokenAddress,
    // distributionAddress,
    tokenList,
    onInitDashboard,
  } = props;


  const networkIndicatorProps = { networkId };
  const contractSelectorProps = { tokenName, tokenSymbol, tokenList, onInitDashboard };

  return (
    <HeaderWrapped className="clearfix">
      <Row type="flex" align="middle" justify="space-between" style={{ backgroundColor: '#fff' }}>
        <Col sm={{ span: 14, offset: 1 }} xs={{ span: 21, offset: 2 }} >
          <Logo />
        </Col>
        <Col sm={{ span: 8, offset: 1 }} xs={24}>
          <Row type="flex" align="middle" justify="center">
            <NetworkIndicator {...networkIndicatorProps} />
            <ContractSelector {...contractSelectorProps} />
          </Row>
        </Col>
      </Row >
    </HeaderWrapped >
  );
}

Header.propTypes = {
  initStatus: PropTypes.string,
  networkId: PropTypes.number,
  tokenName: PropTypes.string,
  tokenSymbol: PropTypes.string,
  tokenAddress: PropTypes.string,
  distributionAddress: PropTypes.string,
  tokenList: PropTypes.array,
  onInitDashboard: PropTypes.func,
};

export default Header;
