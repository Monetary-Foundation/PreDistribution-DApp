/**
*
* CommitDetails
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Collapse, List } from 'antd';
const { Panel } = Collapse;
const customPanelStyle = {};

const Span = styled.span`
  font-weight: 700;
  margin-left: 15px;
  margin-right: 15px;
`;

const ConditionalFooter = (props) => {
  const { total } = props;
  return (
    <div>Total commited: <Span>{total} Ether</Span></div>
  );
};
ConditionalFooter.propTypes = {
  total: PropTypes.string,
};


function CommitDetails(props) {
  const { commitmentsMap, commitmentsTotal } = props;
  // const conditionalFooterProps = { commitmentsMap, commitmentsTotal };
  return (
    <div>
      <h3> Commitment list</h3>
      <Collapse>
        <Panel header="Toggle List" key="1" style={customPanelStyle}>
          {/* commitmentsMap && JSON.stringify(commitmentsMap, 0, 2)} <br /> */}
          <List
            footer={
              commitmentsMap.length >= 2
                ? <div>Total commited: <Span>{commitmentsTotal} Ether</Span></div>
                : null
            }
            size="large"
            bordered
            dataSource={commitmentsMap}
            renderItem={(item) => (
              <List.Item>
                Window: <Span>{item.window}</Span> Amount: <Span>{item.eth_commited} Ether</Span>
              </List.Item>)}
          />
        </Panel>
      </Collapse>
      <br />
    </div>
  );
}

CommitDetails.propTypes = {
  commitmentsMap: PropTypes.array,
  commitmentsTotal: PropTypes.string,
};

export default CommitDetails;
