import React, { Component }  from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { ThemeProvider } from '../../components/themeContext';
import Header from '../../components/header';
import Main from '../../components/main';

import './style.scss';

class ResumePage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isTokenPresented: localStorage.getItem('isTokenPresented') === 'true',
      darkTheme: localStorage.getItem('darkTheme') === 'true'
    };

    this.toggleTheme = () => {
      const darkTheme = this.state.darkTheme;

      this.setState(state => ({
        darkTheme: !state.darkTheme
      }));

      localStorage.setItem('darkTheme', !darkTheme);
    }
  }

  async componentDidMount() {
    if (localStorage.getItem('darkTheme') === null){
      localStorage.setItem('darkTheme', false);
    };

    await Promise.all([
      this.props.skillsGetAction(),
      this.props.educationGetAction(),
      this.props.generalInformationGetAction()
    ]);
  }

  render() {
    return (
      <ThemeProvider value={{
        darkTheme: this.state.darkTheme,
        toggleTheme: this.toggleTheme
      }}>
        <div className={this.state.darkTheme ? "dark" : null}>
          <Header/>
          <Main />
        </div>
      </ThemeProvider>
    )
  }
};


export default connect(null, ({ generalInformation, skills, education }) => ({
  generalInformationGetAction: generalInformation.get,
  skillsGetAction: skills.get,
  educationGetAction: education.get
}))(ResumePage);

ResumePage.propTypes = {
  socialLinksGetAction: PropTypes.func,
  skillsGetAction: PropTypes.func,
  educationGetAction: PropTypes.func
};