/**
*
* ContractSelector
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Menu, Button, Dropdown, Icon } from 'antd';
const MenuItem = Menu.Item;

// const SubMenu = Menu.SubMenu;
// const MenuItemGroup = Menu.ItemGroup;
// const MenuDivider = Menu.Divider;

const StyledButton = styled(Button)`
  margin: 15px;
`;

const StyledMenuItem = styled(MenuItem)`
  line-height: 40px;
`;

function ContractSelector(props) {
  const { tokenName, tokenSymbol, tokenList, onInitDashboard } = props;

  let options;
  if (tokenList) {
    options = tokenList.map((token) =>
      <StyledMenuItem key={token.symbol}><a tabIndex="0" role="button" onClick={() => onInitDashboard(token.symbol)}>{token.symbol}</a></StyledMenuItem>
    );
  }

  const menu = (
    <Menu
      forceSubMenuRender
      defaultSelectedKeys={[tokenSymbol]}
      selectedKeys={[tokenSymbol]}
    >
      <StyledMenuItem disabled key="title">Select contract</StyledMenuItem>
      {options}
    </Menu>
  );

  return (
    <Dropdown overlay={menu}>
      <StyledButton size="large" icon="profile">
        {tokenSymbol}<Icon type="down" />
      </StyledButton>
    </Dropdown>
  );
}

ContractSelector.propTypes = {
  tokenName: PropTypes.string,
  tokenSymbol: PropTypes.string,
  tokenList: PropTypes.array,
  onInitDashboard: PropTypes.func,
};

export default ContractSelector;
