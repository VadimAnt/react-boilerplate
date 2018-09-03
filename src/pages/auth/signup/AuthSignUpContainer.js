import React, { Component } from 'react';
import { connect } from 'react-redux';
import AuthSignUpComponent from './AuthSignUpComponent';
import { signUp } from '../features/operations';

class AuthSignUpContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    };
  }

  onSubmit = e => {
    e.preventDefault();

    const newUser = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      password: this.state.password,
    };

    this.setState({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    });

    this.props.signUp(newUser);
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <AuthSignUpComponent
        firstName={this.state.firstName}
        lastName={this.state.lastName}
        email={this.state.email}
        password={this.state.password}
        onChange={this.onChange}
        onSubmit={this.onSubmit}
      />
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  { signUp }
)(AuthSignUpContainer);
