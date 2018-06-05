/**
*
* WindowCountdown
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import Countdown from 'react-count-down';
// import styled from 'styled-components';


function WindowCountdown(props) {
  const { onGetDistributionInfo, remainingTime } = props;
  const cb = () => {
    console.log('expired callback for Countdown');
    onGetDistributionInfo();
  };


  const OPTIONS = { endDate: Date.now() + (remainingTime * 1000), cb };
  return (
    <div>
      <Countdown options={OPTIONS} />
    </div>
  );
}

WindowCountdown.propTypes = {
  onGetDistributionInfo: PropTypes.func,
  remainingTime: PropTypes.number,
};

export default WindowCountdown;

