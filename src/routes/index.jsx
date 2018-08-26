import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { RouteWithSubRoutes } from '../helpers/routes.helper';
import NotFoundPage from '../pages/notfound/notfound.page';

import aboutRouters from './about.routers';
import homeRoutes from './home.routers';
import postRoutes from './post.routers';

const routes = [].concat(
  homeRoutes,
  aboutRouters,
  postRoutes,
);

export default (
  <Switch>
    {routes.map((route, i) => <RouteWithSubRoutes key={route.path} {...route} />)}
    <Route component={NotFoundPage} />
  </Switch>
);
