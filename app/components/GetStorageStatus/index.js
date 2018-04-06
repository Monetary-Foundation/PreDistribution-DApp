/**
*
* GetStorageStatus
*
*/

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';


function GetStorageStatus(props) {
  const { storageValue, getStorageValueLoading, getStorageValueError } = props;
  return (
    <div>
      GetStorageStatus: <br />
      storageValue: {storageValue || 'null'} <br />
      getStorageValueLoading: {getStorageValueLoading ? 'true' : 'false'} <br />
      getStorageValueError: {getStorageValueError || 'false'} <br /><br />
    </div>
  );
}

GetStorageStatus.propTypes = {
  storageValue: PropTypes.oneOfType([PropTypes.number]),
  getStorageValueLoading: PropTypes.bool,
  getStorageValueError:  PropTypes.oneOfType([PropTypes.bool,PropTypes.string]),
};

export default GetStorageStatus;
