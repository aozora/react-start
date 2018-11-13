import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/img/logo.svg';

const Navigation = () => (
  <header>
    <nav>
      <Link to="/" className="">
        <img src={logo} className="app-logo" alt="logo"/>
      </Link>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Navigation;
