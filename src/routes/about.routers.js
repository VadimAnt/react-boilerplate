import React from 'react';
import { Route } from 'react-router-dom';
import AboutPage from '../pages/about.page';

export default (
  <div>
    <Route exact path="/about-us" component={AboutPage} />
  </div>
);