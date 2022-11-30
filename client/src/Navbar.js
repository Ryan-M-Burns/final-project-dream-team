import React from 'react';
import './Navbar.scss';
import { Link } from 'react-router-dom';
// Drop down menu for account
const Navbar = () => {
  return (
    <nav>
      <div>
        <Link to='/home'>
          <button>Back to Home</button>
        </Link>
        <Link to='/account'> 
          <button>Account</button>
        </Link>
      </div>
      <h1> HARVEST </h1>
      <div>
        <Link to='/our-mission'>
          <button>About Us</button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;