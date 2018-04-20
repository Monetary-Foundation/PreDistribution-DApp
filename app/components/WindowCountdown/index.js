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
  const { timestamp, startTimestamp, windowLenght, onGetDistributionInfo } = props;
  const cb = () => {
    console.log('expired callback for Countdown');
    onGetDistributionInfo();
  };

  const elapsed = timestamp - startTimestamp;
  const currentWindowElapsed = elapsed % windowLenght;
  const remaining = windowLenght - currentWindowElapsed;

  const OPTIONS = { endDate: Date.now() + (remaining * 1000), cb };
  return (
    <div>
      <Countdown options={OPTIONS} />
    </div>
  );
}

WindowCountdown.propTypes = {
  onGetDistributionInfo: PropTypes.func,
  timestamp: PropTypes.number.isRequired,
  startTimestamp: PropTypes.number.isRequired,
  windowLenght: PropTypes.number.isRequired,
};

export default WindowCountdown;

