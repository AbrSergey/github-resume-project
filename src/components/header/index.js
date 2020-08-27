import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SocialLinkIcon from '../socialLinkIcon';
import Spinner from '../spinner';
import { ThemeConsumer } from '../themeContext';

import './style.scss';

const Header = ({ socialLinkData, loading, name, company }) => {
  const onClickLogout = () => {
    localStorage.clear();
  }
  
  return (
    <ThemeConsumer>
      { ({ darkTheme, toggleTheme }) => {
          return (
            <header>
              <div className="header-content-data">
                <h1 className="person-name">{name}</h1>
                <h3 className="speciality">{company}</h3>
              </div>
              
              <div className="header-content-links">
              { loading ? <Spinner/> :
                  socialLinkData.map(({ href, iconClass }) => (<SocialLinkIcon key={href} href={href} iconClass={iconClass}/>))
              }
              </div>

              <label className="switch">
                <input type="checkbox" checked={darkTheme ? true : false} onChange={toggleTheme}/>
                <span className="slider round"></span>
              </label>

              <a className="button logout" onClick={onClickLogout} href="#">
                <i class="fas fa-sign-out-alt"></i>
              </a>
              
            </header>
          )}
      }
    </ThemeConsumer>
  )
};

const mapStateToProps = ({ generalInformation }) => ({
  socialLinkData: generalInformation.socialLinkData,
  name: generalInformation.name,
  company: generalInformation.company,
  loading: generalInformation.loading,
  error: generalInformation.error
});

export default connect(mapStateToProps)(Header);

Header.propTypes = {
  socialLinkData: PropTypes.array,
  name: PropTypes.string,
  company: PropTypes.string,
  loading: PropTypes.bool,
  error: PropTypes.string
};