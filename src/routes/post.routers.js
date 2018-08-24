import React from 'react';
import { Route, Router } from 'react-router-dom';
import PostsPage from '../pages/home.page';

export default (
  <Router>
    <Route exact path="/posts" component={PostsPage} />
  </Router>
);