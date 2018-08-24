import React from 'react';
import { Route, Router } from 'react-router-dom';
import AboutPage from '../pages/about.page';

export default (
  <Router>
    <Route exact path="/about-us" component={AboutPage} />
  </Router>
);