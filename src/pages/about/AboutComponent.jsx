import React from 'react';
import { RouteWithSubRoutes } from '../../utils/routesWithSubRoutes';

const AboutComponent = ({ routes }) => {
  return (
    <div>
      About component
      {/* {routes.map((route, i) => (
        <RouteWithSubRoutes key={i} {...route} />
      ))} */}
    </div>
  );
};

export default AboutComponent;
