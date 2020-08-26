import React from 'react';

import Image from './foto1.jpg';
import './style.scss';

const Avatar = ({ url }) => {
  return (<img className="avatar" src={url ? url : Image} alt="avatar"></img>)
};

export default Avatar;