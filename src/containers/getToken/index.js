import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import Spinner from '../../components/spinner';
import Error from '../../components/error';

import './style.css';

class GetToken extends Component {
  constructor(props) {
    super(props);
    this.state = { }
  }
  async componentDidMount() {
    const queryParams = new URLSearchParams(this.props.location.search); 
    const code = queryParams.get('code')
    await this.props.getAccessTokenAction(code);
  }

  render() {
    const { loading, error } = this.props;

    return (
      <>
        { loading ?
          <div className="token-spinner">
            <Spinner/>
          </div>
          :
            error ? <Error error={error}/> : <Redirect to='/resume'/> 
        }
      </>
    )
  }
};

const mapStateToProps = ({ authorize }) => ({
  loading: authorize.loading,
  error: authorize.error
});

export default connect(mapStateToProps, ({ authorize }) => ({
  getAccessTokenAction: authorize.get
}))(GetToken);

GetToken.propTypes = {
  getAccessTokenAction: PropTypes.func,
  loading: PropTypes.bool,
  error: PropTypes.string
};