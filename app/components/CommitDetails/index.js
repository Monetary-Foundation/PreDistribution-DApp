/**
*
* CommitDetails
*
*/

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { Collapse } from 'antd';
const Panel = Collapse.Panel;

const customPanelStyle = {};

function CommitDetails(props) {
  const { commitments } = props;
  return (
    <div>
      <h3> All Commitments for address</h3>
      <Collapse>
        <Panel header="Commitments list" key="1" style={customPanelStyle}>
          {commitments && JSON.stringify(commitments, 0, 2)} <br />
        </Panel>
      </Collapse>
      <br />
    </div>
  );
}

CommitDetails.propTypes = {
  commitments: PropTypes.array,
};

export default CommitDetails;
