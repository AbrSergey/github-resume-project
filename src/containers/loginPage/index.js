import React, { Component } from 'react';
import Joi from "joi-browser";
import config from '../../config';

import './style.css';

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: null,
      error: null
    }
  }

  schema = {
    login: Joi.string().min(3).required()
  }

  validate = () => {
    const options = { abortEarly: false };
    const data = {
      login: this.state.login
    };
    let { error } = Joi.validate(data, this.schema, options);
    if (error) {
      this.setState({
        error: error.details[0].message
      });

      return error;
    }
  }
  
  handleLoginChange = (e) => {
    this.setState({
      login: e.target.value
    });
  }
  
  handleSubmit = async (e) => {
    e.preventDefault();

    const { auth_url, client_id, redirect_url } = config.github;
    const { login } = this.state

    const error = this.validate();
    if (error) return;

    window.location.replace(`${auth_url}?client_id=${client_id}&login=${login}&redirect_uri=${redirect_url}`);
  }

  render() {
    const { error } = this.state;

    return (
      <form className="login-box">
        <p>Please input your GitHub login</p>
        <input type="text" onChange={this.handleLoginChange}></input>
        { error && <p className="username-error">{error}</p> }
        <button type="submit" onClick={this.handleSubmit}>Sign In</button>
      </form>
    )
  }
};

export default LoginPage;