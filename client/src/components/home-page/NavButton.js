import React from 'react';
import { Link } from 'react-router-dom';

const NavButton = ({ link, name }) => {
  return (
    <Link to={link}>
      <button
        className='nav__button'>
        {name}
      </button>
    </Link>
  );
};
export default NavButton;