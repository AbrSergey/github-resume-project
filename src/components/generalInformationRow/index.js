import React from 'react';

import './style.scss';

const GeneralInformationRow = ({ rowName, rowValue }) => {
  return (
    <tr>
      <th className="row-name"><b>{rowName}</b></th>
      <th className="table-value">{rowValue}</th>
    </tr>
  )
};

export default GeneralInformationRow;