import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.component.css';

export default () => (
  <div>
    <Link exact to="/">
      Home
    </Link>
    <Link to="/about-us">About</Link>
    <Link to="/about-us/test">About/test</Link>
    <Link to="/posts">Posts</Link>
  </div>
);
