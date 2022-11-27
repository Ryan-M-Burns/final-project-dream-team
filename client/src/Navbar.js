import React from 'react';
import './Navbar.scss';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <div>
        <NavLink to='/'>
          <button>Back to Home</button>
        </NavLink>
        <NavLink to='/account'>
          <button>Account</button>
        </NavLink>
      </div>
      <h1> HARVEST </h1>
      <div>
        <NavLink to='/meet-the-farmers'>
          <button>Farmers</button>
        </NavLink>
        <NavLink to='/our-mission'>
          <button>Hungry Humans</button>
        </NavLink>
        <NavLink to='/contact'>
          <button>Contact Us</button>
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;