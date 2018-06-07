/**
*
* CommitLayout
*
*/

import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import Commit from 'components/Commit';
import CommitDetails from 'components/CommitDetails';
import { Row, Col } from 'antd';

const Div = styled.div`
  margin-top: 3%;
`;

function CommitLayout(props) {
  return (
    <Div>
      <Row type="flex" align="left" >
        <Col sm={{ span: 10, offset: 1 }} xs={{ span: 23, offset: 1 }}>
          <Commit {...props} />
        </Col>
        <Col sm={{ span: 11, offset: 1 }} xs={{ span: 23, offset: 1 }}>
          <CommitDetails {...props} />
        </Col>
      </Row>
    </Div>
  );
}

CommitLayout.propTypes = {
};

export default CommitLayout;
