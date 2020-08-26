import React, { Component } from 'react';
import {
  BrowserRouter, Route, Switch, Redirect,
} from 'react-router-dom';
import LoginPage from '../../containers/loginPage';
import GetToken from '../../containers/getToken';
import ResumePage from '../../containers/resumePage';

import './style.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isTokenPresented: localStorage.getItem('isTokenPresented') === 'true',
    };
  }

  async componentDidMount() {
    this.setState({
      isTokenPresented: localStorage.getItem('isTokenPresented') === 'true'
    });
  }
  
  render() {
    const LoginRoute = () => {
      const isTokenPresented = localStorage.getItem('isTokenPresented') === 'true';
      return (
        <Route render={() => (
          !isTokenPresented
            ? <Route path='/login' component={LoginPage}/>
            : <Redirect to='/resume'/>
          )}
        />
      )
    };

    const ResumeRoute = ({ component: Component, ...rest }) => {
      const isTokenPresented = localStorage.getItem('isTokenPresented') === 'true';
      return (
        <Route {...rest} render={() => (
          isTokenPresented
            ? <Route path='/resume' component={ResumePage}/>
            : <Redirect to='/login'/>
        )}
        />
      )
    };

    const PrivateRoute = () => {
      const isTokenPresented = localStorage.getItem('isTokenPresented') === 'true';
      return (
        <Route render={() => (
          isTokenPresented
            ? <Redirect to='/resume'/>
            : <Redirect to='/login'/>
        )}
        />
      )
    };

    return (
      <BrowserRouter>
        <Switch>
          <Route path='/token' component={GetToken}/>
          <LoginRoute path='/login'/>
          <ResumeRoute path='/resume'/>
          <PrivateRoute/>
        </Switch>
      </BrowserRouter>
    )
  }
};

export default App;