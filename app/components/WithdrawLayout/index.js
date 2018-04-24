/**
*
* WithdrawLayout
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Withdraw from 'components/Withdraw';
import { Row, Col } from 'antd';

const Div = styled.div`
  margin-top: 3%;
  padding-bottom: 5%;
`;

function WithdrawLayout(props) {
  const { rewards } = props;
  return (
    <Div>
      <Row type="flex" align="left" >
        <Col sm={{ span: 10, offset: 1 }} xs={{ span: 23, offset: 1 }}>
          <Withdraw {...props} />
        </Col>
        <Col sm={{ span: 10, offset: 1 }} xs={{ span: 23, offset: 1 }}>
          <h2> right side - heat map </h2>
          {rewards && JSON.stringify(rewards, 0, 2)} <br />
        </Col>
      </Row>
    </Div>
  );
}

WithdrawLayout.propTypes = {
  rewards: PropTypes.array,
};

export default WithdrawLayout;
