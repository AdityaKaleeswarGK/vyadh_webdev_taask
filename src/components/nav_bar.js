import React, { Component } from 'react';
import logo from './images/vyadh_logo.png'
import './nav.css';
import { Link } from 'react-router-dom';

export default class NavBar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="navbar-left">
            <img src={logo} alt="Vyadh_logo" className="logo" />
          </div>
          <div className="navbar-right">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/contact" className="nav-link">Contact</Link>
          </div>
        </nav>
      </div>
    );
  }
}
