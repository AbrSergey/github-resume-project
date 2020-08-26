import React from 'react';
import Card from '../card';
import Avatar from '../avatar';
import GeneralInformationRow from '../generalInformationRow';
import Spinner from '../spinner';
import { ThemeConsumer } from '../themeContext';

import './style.scss';

const GeneralInformation = ({ data, name, position, loading, avatar }) => {
  return (
    <ThemeConsumer>
      {
        ({ darkTheme }) => {
          const theme = darkTheme ? 'dark' : 'light';
          return (
            <Card>
              <div className="general-information-card" theme={theme}>
                { loading ? <Spinner/> :
                <>
                  <Avatar url={avatar}/>
                    <div className="general-information">
                      <div className="general-information-data">
                        <p className="hello" theme={theme}>Hello & Welcome</p>
                        <p className="whoami" theme={theme}>I'm <span>{name}</span></p>
                        <p className="work-position" theme={theme}>{position}</p>
                        <table>
                          {
                            Object.keys(data).map((name) => (<GeneralInformationRow key={name} rowName={name} rowValue={data[name]} />))
                          }
                        </table>
                      </div>
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

export default GeneralInformation;