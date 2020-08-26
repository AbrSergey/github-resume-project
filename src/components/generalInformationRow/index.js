import React from 'react';
import { ThemeConsumer } from '../themeContext';

import './style.scss';

const GeneralInformationRow = ({ rowName, rowValue }) => {
  return (
    <ThemeConsumer>
      {
        ({ darkTheme }) => {
          const theme = darkTheme ? 'dark' : 'light';
          return (
            <tr>
              <th className="row-name" theme={theme}><b>{rowName}</b></th>
              <th className="table-value" theme={theme}>{rowValue}</th>
            </tr>
          )
        }
      }
    </ThemeConsumer>
  )
};

export default GeneralInformationRow;