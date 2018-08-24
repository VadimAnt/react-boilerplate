import React from 'react';
import { Route } from 'react-router-dom';

import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import PostsPage from '../pages/PostsPage';

export default (
  <div>
    <Route exact path="/" component={HomePage} />
    <Route exact path="/about-us" component={AboutPage} />
    <Route exact path="/posts" component={PostsPage} />
  </div>
);