import React from 'react';
import { ThemeConsumer } from '../themeContext';

import './style.scss';

const Title = ({ name }) => {
  return (
    <ThemeConsumer>
      {
        ({ darkTheme }) => {
          const theme = darkTheme ? 'dark' : 'light';
          return (
            <div className="title-name" theme={theme}>{name}</div>
          )
        }
      }
    </ThemeConsumer>
  )
};

export default Title;