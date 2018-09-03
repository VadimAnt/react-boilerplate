import React from 'react';
import AuthSignInContainer from './signin/AuthSignInContainer';
import AuthSignUpContainer from './signup/AuthSignUpContainer';

const AuthComponent = ({ location }) => {
  const authComponent =
    location.pathname === '/auth/signup' ? (
      <AuthSignUpContainer />
    ) : (
      <AuthSignInContainer />
    );

  return <div>{authComponent}</div>;
};

export default AuthComponent;
