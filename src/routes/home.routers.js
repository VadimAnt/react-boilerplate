import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from '../pages/home.page';

export default (
  <div>
    <Route exact path="/" component={HomePage} />
  </div>
);