import React from 'react';
import SkillProgress from '../skillProgress';
import Card from '../card';
import Spinner from '../spinner';
import { ThemeConsumer } from '../themeContext';

import './style.scss';

const Main = ({ data, text, loading, error  }) => {
  return (
    <Card>
      <div className="skills-card">
        { loading ? <Spinner/> :
          <>
            <div className="skills-card-description">
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
};

export default Main;