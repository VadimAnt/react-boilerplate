import React from 'react';
import { Route } from 'react-router-dom';

import HomePage from '../pages/home.page';
import AboutPage from '../pages/about.page';
import PostsPage from '../pages/posts.page';

export default (
  <div>
    <Route exact path="/" component={HomePage} />
    <Route exact path="/about-us" component={AboutPage} />
    <Route exact path="/posts" component={PostsPage} />
  </div>
);