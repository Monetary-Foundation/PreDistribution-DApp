/**
*
* WithdrawLayout
*
*/

import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import Withdraw from 'components/Withdraw';
import WithdrawDetails from 'components/WithdrawDetails';
import { Row, Col } from 'antd';

const Div = styled.div`
  margin-top: 3%;
  padding-bottom: 5%;
`;

function WithdrawLayout(props) {
  return (
    <Div>
      <Row type="flex" align="left" >
        <Col sm={{ span: 10, offset: 1 }} xs={{ span: 22, offset: 1 }}>
          <Withdraw {...props} />
        </Col>
        <Col sm={{ span: 11, offset: 1 }} xs={{ span: 22, offset: 1 }}>
          <WithdrawDetails {...props} />
        </Col>
      </Row>
    </Div>
  );
}

WithdrawLayout.propTypes = {
};

export default WithdrawLayout;
