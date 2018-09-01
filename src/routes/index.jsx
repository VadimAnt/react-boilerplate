import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { RouteWithSubRoutes } from '../utils/routesWithSubRoutes';
import NotFoundPage from '../pages/notfound/NotFoundContainer';

import aboutRouters from './AboutRoutes';
import homeRoutes from './HomeRoutes';
import postRoutes from './PostRoutes';

const routes = [].concat(homeRoutes, aboutRouters, postRoutes);

export default (
  <Switch>
    {routes.map((route, i) => (
      <RouteWithSubRoutes key={route.path} {...route} />
    ))}
    <Route component={NotFoundPage} />
  </Switch>
);
