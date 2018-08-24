import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <div>
      <Link exact to="/">Home</Link>
      <Link to="/about-us">About</Link>
      <Link to="/posts">Posts</Link>
    </div>
  );
};
