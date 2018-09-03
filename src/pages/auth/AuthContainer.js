import React, { Component } from 'react';
import { connect } from 'react-redux';
import AuthComponent from './AuthComponent';

class AuthContainer extends Component {
  render() {
    return <AuthComponent location={this.props.location} />;
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthContainer);
