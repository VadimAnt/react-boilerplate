import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { goBack } from 'connected-react-router';
import AuthSignInComponent from './AuthSignInComponent';
import { signIn } from '../features/operations';

class AuthSignInContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      redirectsPath: this.props.location.state || { from: { pathname: '/' } },
    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const credentials = {
      email: this.state.email,
      password: this.state.password,
    };

    this.setState({ email: '', password: '' });
    this.props.signIn(credentials, this.state.redirectsPath);
  };

  render() {
    return (
      <AuthSignInComponent
        email={this.state.email}
        password={this.state.password}
        onChange={this.onChange}
        onSubmit={this.onSubmit}
      />
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
});

export default withRouter(
  connect(
    mapStateToProps,
    { signIn, goBack }
  )(AuthSignInContainer)
);
