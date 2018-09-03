import React from 'react';
import { NavLink } from 'react-router-dom';
import './css/navbar.css';

const Navbar = () => (
  <div className="navbar">
    <ul>
      <li>
        <NavLink exact to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/about-us">About</NavLink>
      </li>
      <li>
        <NavLink to="/about-us/test">About/test</NavLink>
      </li>
      <li>
        <NavLink to="/posts">Posts</NavLink>
      </li>
      <li>
        <NavLink to="/auth/signin">Login</NavLink>
      </li>
      <li>
        <NavLink to="/auth/signup">Register</NavLink>
      </li>
    </ul>
  </div>
);

export default Navbar;
