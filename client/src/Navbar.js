import React from 'react';
import './Navbar.scss';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <div>
        <Link to='/'>
          <button>Back to Home</button>
        </Link>
        <Link to='/account'>
          <button>Account</button>
        </Link>
      </div>
      <h1> HARVEST </h1>
      <div>
        <Link to='/meet-the-farmers'>
          <button>Farmers</button>
        </Link>
        <Link to='/our-mission'>
          <button>Hungry Humans</button>
        </Link>
        <Link to='/contact'>
          <button>Contact Us</button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;