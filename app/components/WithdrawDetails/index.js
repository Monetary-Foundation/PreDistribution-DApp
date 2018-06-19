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
const { Item } = List;

const customPanelStyle = {};

const Span = styled.span`
  font-weight: 700;
  margin-left: 15px;
  margin-right: 15px;
`;


function WithdrawDetails(props) {
  const { rewardsList, rewardsTotal, tokenSymbol } = props;
  // auto open pannel if there are rewards waiting
  const activeKeyArray = rewardsList.length >= 1 ? ['1'] : [];

  return (
    <div>
      <h3> Reward List </h3>
      <Collapse defaultActiveKey={activeKeyArray}>
        <Panel header="Toggle list" key="1" style={customPanelStyle}>
          {/* rewardsList && JSON.stringify(rewardsList, 0, 2)} <br /> */}
          <List
            size="large"
            footer={
              rewardsList.length >= 2
                ? <div>Total reward: <Span>{rewardsTotal} {tokenSymbol}</Span></div>
                : null
            }
            bordered
            dataSource={rewardsList}
            renderItem={(item) => (
              <Item>
                Window: <Span>{item.window}</Span> Amount: <Span>{item.tokens_reward} {tokenSymbol}</Span>
              </Item>)}
          />
        </Panel>
      </Collapse>
    </div>
  );
}

WithdrawDetails.propTypes = {
  rewardsList: PropTypes.array,
  rewardsTotal: PropTypes.string,
  tokenSymbol: PropTypes.string,
};

export default WithdrawDetails;
