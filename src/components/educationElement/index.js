import React from 'react';

import './style.scss';

const EducationElement = ({ name, place, period, position }) => {
  return (
    <div className={`education-card education-card-${position}`}>
      <p className="education-name">{name}</p>
      <p className="education-place">{place}</p>
      <p className="education-period">{period}</p>
    </div>
  )
};

export default EducationElement;