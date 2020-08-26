import React from 'react';
import { ThemeConsumer } from '../themeContext';

import './style.scss';

const SocialLinkIcon = ({ href, iconClass }) => {
  const IconLink = () => (
    <ThemeConsumer>
      {
        ({ darkTheme }) => {
          const theme = darkTheme ? "dark" : "light";

          return (
            <a className="header-icon" href={href}>
              <i className={`fab ${iconClass}`} theme={theme}></i>
            </a>
          )
        }
      }
    </ThemeConsumer>
  );

  return (
    href && iconClass && <IconLink/>
  )
};

export default SocialLinkIcon;