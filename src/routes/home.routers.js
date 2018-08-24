import React from 'react';
import { Route, Router } from 'react-router-dom';
import HomePage from '../pages/home.page';

export default (
  <Router>
    <Route exact path="/" component={HomePage} />
  </Router>
);