/**
*
* SubHeader
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Row, Col } from 'antd';
// import { exchanges } from 'utils/constants';

const RowS = styled(Row)`
  div{
    text-align: center;
  }
  span {
    font-size: 1.3em;
  }
`;

const url = 'https://monetarycoin.org/monetarycoin_exchange_list';

function SubHeader(props) {
  const { tokenSymbol } = props;
  const token = tokenSymbol || 'MERO';
  // const { name, url } = exchanges[token][0];
  return (
    <RowS type="flex" >
      <Col xs={{ span: 20, offset: 1 }}>
        <span>{"Don't"} like to wait?
          {/* <a target="_blank" rel="noopener" href={url}>
            {` ${tokenSymbol}`} is traded on {name}
          </a> */}
          <a target="_blank" rel="noopener" href={url}>
            {` ${token}`} Exchange List
          </a>
        </span>
      </Col>
    </RowS>
  );
}

SubHeader.propTypes = {
  tokenSymbol: PropTypes.string,
};

export default SubHeader;
