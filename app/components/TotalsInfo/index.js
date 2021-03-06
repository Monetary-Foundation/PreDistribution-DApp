/**
*
* TotalsInfo
*
*/

import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Row, Col } from 'antd';
import TotalsHeatmap from 'components/TotalsHeatmap';
import TotalsInfoDetails from 'components/TotalsInfoDetails';
import TotalsList from 'components/TotalsList';

const RowS = styled(Row)`
  padding-top: 3em;
`;

function TotalsInfo(props) {
  // const { totals,totalsList, days } = props;  // eslint-disable-line
  return (
    <div>
      <RowS>
        <Col sm={{ span: 9, offset: 1 }} xs={{ span: 22, offset: 1 }}>
          <TotalsInfoDetails />
        </Col>
        <Col sm={{ span: 11, offset: 2 }} xs={{ span: 22, offset: 1 }}>
          <TotalsHeatmap {...props} />
        </Col>
      </RowS>
      <RowS>
        <Col sm={{ span: 22, offset: 1 }} xs={{ span: 22, offset: 1 }}>
          <TotalsList {...props} />
        </Col>
      </RowS>
    </div>
  );
}

TotalsInfo.propTypes = {
  // days: PropTypes.number,
  // totals: PropTypes.arrayOf(PropTypes.string),
  // totalsList: PropTypes.arrayOf(PropTypes.object),
};

export default TotalsInfo;
