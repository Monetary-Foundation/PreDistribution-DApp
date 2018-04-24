/**
*
* TotalsHeatmap
*
*/

import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import CalendarHeatmap from 'react-calendar-heatmap';
import { Row, Col } from 'antd';

const Div = styled.div`
  height: 10%;
  padding-botom: 5px;

  /*
  * react-calendar-heatmap styles
  */
 
   .react-calendar-heatmap text {
     font-size: 3px !important;
     fill: #aaa;
   }
 
   .react-calendar-heatmap .react-calendar-heatmap-small-text {
     font-size: 2px !important;
   }
 
   .react-calendar-heatmap rect:hover {
     stroke: #555;
     stroke-width: 1px !important;
   }
 
   /*
   * Default color scale
   */
 
   .react-calendar-heatmap .color-empty {
     fill: #eeeeee !important;
   }
 
  .react-calendar-heatmap .color-scale-1 { fill: #d6e685; }
  .react-calendar-heatmap .color-scale-2 { fill: #8cc665; }
  .react-calendar-heatmap .color-scale-3 { fill: #44a340; }
  .react-calendar-heatmap .color-scale-4 { fill: #1e6823; }
  .react-calendar-heatmap .color-scale-5 { fill: #09210b; }
`;

const startDate = new Date('2016-01-02');

// transform window number into fake date for CalendarHeatmap usage
const getFakeDate = (window) => {
  const newDate = new Date(startDate.getTime());
  newDate.setDate(newDate.getDate() + window + 1);
  return newDate;
};

const transformWindow = (windowValue, index) => {
  const newWindow = {};
  newWindow.date = getFakeDate(index);
  newWindow.count = 3;
  return newWindow;
};

const transformTotals = (totals) => {
  return totals.map(transformWindow);
};

function TotalsHeatmap(props) {
  const { totals, days } = props;
  const endDate = getFakeDate(days);
  const normTotals = transformTotals(totals);

  return (
    <Div>
      {totals && JSON.stringify(totals, 0, 2)}
      <Row>
        <Col sm={{ span: 9, offset: 1 }} xs={{ span: 22, offset: 1 }}>
          <CalendarHeatmap
            showMonthLabels={false}
            gutterSize={2}
            startDate={startDate}
            endDate={endDate}
            values={normTotals}
            classForValue={(value) => (value) ? `color-scale-${value.count}` : 'color-empty'}
          />
        </Col>
        <br />
      </Row>
    </Div>
  );
}

TotalsHeatmap.propTypes = {

};

export default TotalsHeatmap;

