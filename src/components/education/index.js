import React from 'react';
import EducationContent from '../educationContent';
import Spinner from '../spinner';
import { ThemeConsumer } from '../themeContext';
 
import './style.scss';

const Education = ({ data, loading, error }) => {
  let educationCardRight = JSON.parse(JSON.stringify(data));

  const leftLength = Math.ceil(data.length / 2);
  const educationCardLeft = [];
  for (let i = 0; i < leftLength; i++) educationCardLeft.push(educationCardRight.shift());

  return (
    <ThemeConsumer>
      {
        ({ darkTheme }) => {
          const theme = darkTheme ? "dark" : "light";

          return (
            <div className="education-layout">
              { loading ? <Spinner/> :
                <>
                  <EducationContent educations={educationCardLeft} position="left"/>
                  <div className="vertical-line" theme={theme}/>
                  <EducationContent educations={educationCardRight} position="right"/>
                </>
              }
            </div>
          )
        }
      }
    </ThemeConsumer>
  )
};

export default Education;