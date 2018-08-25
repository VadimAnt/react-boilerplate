import React, { Component } from 'react';
import { RouteWithSubRoutes } from '../../helpers/routes.helper';
import './about.page.css';

export default class AboutPage extends Component {
  render() {
    return (
      <div>
        About component
        {this.props.routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
      </div>
    )
  }
}
