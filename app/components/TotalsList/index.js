/**
*
* TotalsList
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

function TotalsList(props) {
  const { totalsList, totalsSum } = props;
  return (
    <Collapse>
      {/* <Collapse defaultActiveKey={['1']}> */}
      {/*
      <Panel header="Totals list" key="1" style={customPanelStyle}>
        {totals && JSON.stringify(totals, 0, 2)}
      </Panel>
      <Panel header="Totals mapped list" key="2" style={customPanelStyle}>
        {totalsList && JSON.stringify(totalsList, 0, 2)}
      </Panel>
      */}
      <Panel header="Toggle commitments list" key="1" style={customPanelStyle}>
        <List
          size="large"
          header={
            <div>Total commited: <Span>{totalsSum} Ether</Span></div>

          }
          bordered
          dataSource={totalsList || []}
          renderItem={(item) => (
            <Item>
              Window: <Span>{item.window}</Span> Amount: <Span>{item.eth_commited} Ether</Span>
            </Item>)}
        />
      </Panel>
    </Collapse>
  );
}

TotalsList.propTypes = {
  // totals: PropTypes.arrayOf(PropTypes.string),
  totalsList: PropTypes.arrayOf(PropTypes.object),
  totalsSum: PropTypes.string,
};

export default TotalsList;
