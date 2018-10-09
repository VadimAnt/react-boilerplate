import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from '../utils/PrivateRoute';

import NotFoundPage from '../pages/notfound/NotFoundContainer';

import AboutContainer from '../pages/about/AboutContainer';
import HomeContainer from '../pages/home/HomeContainer';
import PostsContainer from '../pages/posts/PostsContainer';
import AuthSignInContainer from '../pages/auth/signin/AuthSignInContainer';
import AuthSignUpContainer from '../pages/auth/signup/AuthSignUpContainer';

export default (
  <Switch>
    <Route path="/" exact={this} component={HomeContainer} />
    <Route path="/auth/signin" component={AuthSignInContainer} />
    <Route path="/auth/signup" component={AuthSignUpContainer} />

    <Route path="/about-us" component={AboutContainer} />

    <PrivateRoute path="/posts" component={PostsContainer} />
    <Route component={NotFoundPage} />
  </Switch>
);
