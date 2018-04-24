/**
*
* CommitLayout
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Commit from 'components/Commit';
import { Row, Col } from 'antd';

const Div = styled.div`
  margin-top: 3%;
`;

function CommitLayout(props) {
  const { commitments } = props;
  return (
    <Div>
      <Row type="flex" align="left" >
        <Col sm={{ span: 10, offset: 1 }} xs={{ span: 23, offset: 1 }}>
          <Commit {...props} />
        </Col>
        <Col sm={{ span: 10, offset: 1 }} xs={{ span: 23, offset: 1 }}>
          <h2> right side - heat map </h2>
          {commitments && JSON.stringify(commitments, 0, 2)} <br />
          <br />
        </Col>
      </Row>
    </Div>
  );
}

CommitLayout.propTypes = {
  commitments: PropTypes.array,
};

export default CommitLayout;
