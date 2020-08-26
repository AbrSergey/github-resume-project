import React from 'react';
import { ThemeConsumer } from '../themeContext';

import './style.scss';

const EducationElement = ({ name, place, period, position }) => {
  return (
    <ThemeConsumer>
      {
        ({ darkTheme }) => {
          const theme = darkTheme ? "dark" : "light";

          return (
            <div className={`education-card education-card-${position}`} theme={theme}>
              <p className="education-name" theme={theme}>{name}</p>
              <p className="education-place" theme={theme}>{place}</p>
              <p className="education-period">{period}</p>
            </div>
          )
        }
      }
    </ThemeConsumer>
  )
};

export default EducationElement;