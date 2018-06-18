/**
*
* WithdrawDetails
*
*/

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { Collapse } from 'antd';
const { Panel } = Collapse;

const customPanelStyle = {};

function WithdrawDetails(props) {
  const { rewardsMap } = props;
  return (
    <div>
      <h3> Rewards list for account </h3>
      <Collapse>
        <Panel header="Rewards list" key="1" style={customPanelStyle}>
          {rewardsMap && JSON.stringify(rewardsMap, 0, 2)} <br />
        </Panel>
      </Collapse>
    </div>
  );
}

WithdrawDetails.propTypes = {
  rewardsMap: PropTypes.array,
};

export default WithdrawDetails;
