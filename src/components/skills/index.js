import React from 'react';
import SkillProgress from '../skillProgress';
import Card from '../card';
import Spinner from '../spinner';
import { ThemeConsumer } from '../themeContext';

import './style.scss';

const Main = ({ data, text, loading, error  }) => {
  return (
    <ThemeConsumer>
      {
        ({ darkTheme }) => {
          const theme = darkTheme ? "dark" : "light";

          return (
            <Card>
              <div className="skills-card" theme={theme}>
                { loading ? <Spinner/> :
                  <>
                    <div className="skills-card-description" theme={theme}>
                    <p>{text}</p>
                    </div>
                    <div className="skills-progress">
                      {
                        data.map(({ name, percent }) => (<SkillProgress key={name} name={name} percent={percent}/>))
                      }
                    </div>
                  </>
                }
              </div>
            </Card>
          )
        }
      }
    </ThemeConsumer>
  )
};

export default Main;