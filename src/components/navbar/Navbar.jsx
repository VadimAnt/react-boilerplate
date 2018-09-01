import React from 'react';
import { Link } from 'react-router-dom';
import './css/navbar.css';

const Navbar = () => (
  <div className="navbar">
    <ul>
      <li>
        <Link exact to="/">
          Home
        </Link>
      </li>
      <li>
        <Link to="/about-us">About</Link>
      </li>
      <li>
        <Link to="/about-us/test">About/test</Link>
      </li>
      <li>
        <Link to="/posts">Posts</Link>
      </li>
    </ul>
  </div>
);

export default Navbar;
