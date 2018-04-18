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
    initStatus,
    networkName,
    tokenName,
    tokenAddress,
    distributionAddress,
    tokenList,
    onInitDashboard,
  } = props;


  const networkIndicatorProps = { networkName };
  const contractSelectorProps = { tokenName, tokenList, onInitDashboard };

  return (
    <HeaderWrapped className="clearfix">
      <Row type="flex" align="middle" justify="space-between" style={{ backgroundColor: '#fff' }}>
        <Col sm={{ span: 6, offset: 1 }} xs={24}>
          <Logo />
        </Col>
        <Col sm={{ span: 8, offset: 2 }} xs={24}>
          <Row type="flex" align="middle" justify="center">
            {/* <NetworkIndicator {...networkIndicatorProps} />
            <NetworkMenu {...networkMenuProps} /> */}
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
  networkName: PropTypes.string,
  tokenName: PropTypes.string,
  tokenAddress: PropTypes.string,
  distributionAddress: PropTypes.string,
  tokenList: PropTypes.array,
  onInitDashboard: PropTypes.func,
};

export default Header;
