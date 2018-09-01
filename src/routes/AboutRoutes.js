import React from 'react';
import AboutPage from '../pages/about/AboutContainer';

const Test = () => <h3>Bus</h3>;
export default [
  {
    path: '/about-us',
    component: AboutPage,
    routes: [
      {
        path: '/about-us/test',
        component: Test,
      },
    ],
  },
];
