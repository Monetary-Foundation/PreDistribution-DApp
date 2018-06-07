/**
*
* TotalsList
*
*/

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { Collapse } from 'antd';
const Panel = Collapse.Panel;

const customPanelStyle = {};

function TotalsList(props) {
  const { totals } = props;
  return (
    <Collapse>
      <Panel header="Totals list" key="1" style={customPanelStyle}>
        {totals && JSON.stringify(totals, 0, 2)}
      </Panel>
    </Collapse>
  );
}

TotalsList.propTypes = {
  totals: PropTypes.arrayOf(PropTypes.string),
};

export default TotalsList;
