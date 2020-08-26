import React from 'react';
import { ThemeConsumer } from '../themeContext';

import './style.scss';

const SkillProgress = ({ name, percent }) => {
  return (
    <ThemeConsumer>
      {
        ({ darkTheme }) => {
          const theme = darkTheme ? "dark" : "light";

            return (
              <>
                <div className="progress-unit" theme={theme}>
                  <p className="skill-name">{name}</p>
                  <p className="skill-rate">{percent}</p>
                </div>
                <div className="progress-container">
                  <div className="progress-content" style={{ width: percent }}/>
                </div>
              </>
            )
        }
      }
    </ThemeConsumer>
  )
};

export default SkillProgress;