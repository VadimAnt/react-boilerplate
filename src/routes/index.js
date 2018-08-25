import React from 'react';
import { Switch } from "react-router-dom";
import { RouteWithSubRoutes } from '../helpers/routes.helper';
import aboutRouters from './about.routers';
import homeRoutes from './home.routers';
import postRoutes from './post.routers';

const routes = [].concat(
  homeRoutes,
  aboutRouters,
  postRoutes,
);
console.log(routes);

export default (
  <Switch>
    {routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
  </Switch>
)