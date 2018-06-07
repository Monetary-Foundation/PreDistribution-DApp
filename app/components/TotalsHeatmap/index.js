/**
*
* TotalsHeatmap
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import CalendarHeatmap from 'react-calendar-heatmap';

const Div = styled.div`
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
 
   .react-calendar-heatmap .color-scale-empty {
     fill: #eeeeee !important;
   }
 
   .react-calendar-heatmap .color-empty {
     fill: #eeeeee !important;
   }
 
  .react-calendar-heatmap .color-scale-0 { fill: #eeeeaa; }
  .react-calendar-heatmap .color-scale-1 { fill: #d6e685; }
  .react-calendar-heatmap .color-scale-2 { fill: #8cc665; }
  .react-calendar-heatmap .color-scale-3 { fill: #44a340; }
  .react-calendar-heatmap .color-scale-4 { fill: #1e6823; }
  .react-calendar-heatmap .color-scale-5 { fill: #164a19; }
`;

const startDate = new Date('2016-01-02');

// transform window number into fake date for CalendarHeatmap usage
const getFakeDate = (window) => {
  const newDate = new Date(startDate.getTime());
  newDate.setDate(newDate.getDate() + window + 1);
  return newDate;
};

const getTransformWindow = (scaleFactor) =>
  (windowValue, index) => {
    const newWindow = {};
    newWindow.date = getFakeDate(index);
    newWindow.count = (windowValue !== '0') ? Math.round(windowValue * scaleFactor) : 'empty';
    return newWindow;
  };

const maxReducer = (accumulator, currentValue) => {
  const value = Number(currentValue);
  return (value > accumulator) ? currentValue : accumulator;
};

const transformTotals = (totals) => {
  if (!totals) return null;
  const max = totals.reduce(maxReducer, Number('0'));
  const scaleFactor = 4.0 / max;
  const transformWindow = getTransformWindow(scaleFactor);
  return totals ? totals.map(transformWindow) : null;
};

function TotalsHeatmap(props) {
  const { totals, days } = props;

  const endDate = getFakeDate(days);
  const normTotals = transformTotals(totals);

  if (!normTotals) {
    return null;
  }
  // const sampleData = [{ date: getFakeDate(0), count: 0 }, { date: getFakeDate(1), count: 1 }, { date: getFakeDate(2), count: 2 }, { date: getFakeDate(3), count: 3 }, { date: getFakeDate(4), count: 4 }];
  return (
    <Div>
      <h3> Commitment distribution </h3>
      <CalendarHeatmap
        showMonthLabels={false}
        gutterSize={2}
        startDate={startDate}
        endDate={endDate}
        values={normTotals}
        classForValue={(value) => (value) ? `color-scale-${value.count}` : 'color-empty'}
      />
      <br />
    </Div>
  );
}

TotalsHeatmap.propTypes = {
  days: PropTypes.number,
  totals: PropTypes.arrayOf(PropTypes.string),
};

export default TotalsHeatmap;

