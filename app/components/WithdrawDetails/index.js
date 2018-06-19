/**
*
* WithdrawDetails
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


function WithdrawDetails(props) {
  const { rewardsMap, rewardsTotal, tokenSymbol } = props;
  return (
    <div>
      <h3> Reward List </h3>
      <Collapse>
        <Panel header="Toggle list" key="1" style={customPanelStyle}>
          {/* rewardsMap && JSON.stringify(rewardsMap, 0, 2)} <br /> */}
          <List
            size="large"
            footer={
              rewardsMap.length >= 2
                ? <div>Total reward: <Span>{rewardsTotal} {tokenSymbol}</Span></div>
                : null
            }
            bordered
            dataSource={rewardsMap}
            renderItem={(item) => (
              <List.Item>
                Window: <Span>{item.window}</Span> Amount: <Span>{item.tokens_reward} {tokenSymbol}</Span>
              </List.Item>)}
          />
        </Panel>
      </Collapse>
    </div>
  );
}

WithdrawDetails.propTypes = {
  rewardsMap: PropTypes.array,
  rewardsTotal: PropTypes.string,
  tokenSymbol: PropTypes.string,
};

export default WithdrawDetails;
