/**
*
* KycFormLink
*
*/

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { Popover } from 'antd';

function KycFormLink(props) {
  const { formUrl } = props;

  const encodeUri = encodeURI(formUrl);
  const content = (
    <div>
      <p>Scan using you phone</p>
      <img src={`https://api.qrserver.com/v1/create-qr-code/?data=${encodeUri}&amp;size=100x100`} alt="" title="" />
    </div>
  );

  return (
    <span>Use this{' '}
      <Popover content={content} placement="right" title="Mobile QR" trigger="hover">
        <a
          href={formUrl}
          target="_blank"
        >
          <b>Form</b>
        </a>
      </Popover>
      {' '}to register your address by preforming a short AML/KYC procedure.<br />
    </span>
  );
}

KycFormLink.propTypes = {
  formUrl: PropTypes.string,
};

export default KycFormLink;
