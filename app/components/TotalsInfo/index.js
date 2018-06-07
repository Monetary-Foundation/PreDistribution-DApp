/**
*
* TotalsInfo
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Row, Col } from 'antd';
import TotalsHeatmap from 'components/TotalsHeatmap';
import TotalsInfoDetails from 'components/TotalsInfoDetails';

const RowS = styled(Row)`
  padding-bottom: 3em;
  padding-top: 4em;
`;

function TotalsInfo(props) {
  const { totals, days } = props;  // eslint-disable-line
  return (
    <div>
      <RowS>
        <Col sm={{ span: 9, offset: 1 }} xs={{ span: 22, offset: 1 }}>
          <TotalsInfoDetails />
        </Col>
        <Col sm={{ span: 9, offset: 2 }} xs={{ span: 22, offset: 1 }}>
          <TotalsHeatmap {...props} />
        </Col>
      </RowS>
      <Row>
        <Col sm={{ span: 22, offset: 1 }} xs={{ span: 22, offset: 1 }}>
          {totals && JSON.stringify(totals, 0, 2)}
        </Col>
        <br />
      </Row>
    </div>
  );
}

TotalsInfo.propTypes = {
  days: PropTypes.number,
  totals: PropTypes.arrayOf(PropTypes.string),
};

export default TotalsInfo;
