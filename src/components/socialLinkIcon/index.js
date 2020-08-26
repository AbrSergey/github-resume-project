import React from 'react';

import './style.scss';

const SocialLinkIcon = ({ href, iconClass }) => {
  const IconLink = () => (
    <a className="header-icon" href={href}>
      <i className={`fab ${iconClass}`}></i>
    </a>
  );

  return (
    href && iconClass && <IconLink/>
  )
};

export default SocialLinkIcon;