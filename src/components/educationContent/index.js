import React from 'react';
import EducationElement from '../educationElement';

import './style.scss';

const EducationContent = ({ educations, position }) => {
  return (
      <div className="education-content">
        {
          educations.map(({ name, place, period }) => (<EducationElement key={name} name={name} place={place} period={period} position={position}/>))
        }
      </div>
  )
};

export default EducationContent;