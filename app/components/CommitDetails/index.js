/**
*
* CommitDetails
*
*/

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { Collapse, List } from 'antd';
const { Panel } = Collapse;
const customPanelStyle = {};

function CommitDetails(props) {
  const { commitmentsMap } = props;
  return (
    <div>
      <h3> All Commitments for address</h3>
      <Collapse>
        <Panel header="Commitments list" key="1" style={customPanelStyle}>
          {/* commitmentsMap && JSON.stringify(commitmentsMap, 0, 2)} <br /> */}
          <List
            size="large"
            bordered
            dataSource={commitmentsMap}
            renderItem={(item) => (<List.Item>{`Window: ${item.window} Ether: ${item.eth_commited}`}</List.Item>)}
          />
        </Panel>
      </Collapse>
      <br />
    </div>
  );
}

CommitDetails.propTypes = {
  commitmentsMap: PropTypes.array,
};

export default CommitDetails;
