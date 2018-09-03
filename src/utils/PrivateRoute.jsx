import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
const PATH_SIGNIN = '/auth/signin';

class PrivateRoute extends Component {
  render() {
    const isAuth = this.props.auth.isAuthenticated;
    const token = localStorage.getItem('token');
    const pathname = PATH_SIGNIN;

    return (
      <Route
        path={this.props.path}
        render={props =>
          isAuth || token ? (
            <this.props.component />
          ) : (
            <Redirect to={{ pathname, state: { from: props.location } }} />
          )
        }
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps)(PrivateRoute);
