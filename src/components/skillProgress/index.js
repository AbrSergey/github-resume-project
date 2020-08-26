import React from 'react';

import './style.scss';

const SkillProgress = ({ name, percent }) => {
  return (
    <>
      <div className="progress-unit">
        <p className="skill-name">{name}</p>
        <p className="skill-rate">{percent}</p>
      </div>
      <div className="progress-container">
        <div className="progress-content" style={{ width: percent }}/>
      </div>
    </>
  )
};

export default SkillProgress;