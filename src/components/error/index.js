import React from 'react';

import './style.css';

const Error = ({ error }) => (
  <div className="token-error">
    Ooops... ERROR
    <span>{error}</span>
  </div> 
);

export default Error;
