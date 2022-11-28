import React from 'react';
import { Link } from 'react-router-dom';

const NavButton = ({ link, pageName }) => {
  return (
    <Link to={link}>
      <button
        className='nav__button'>
        {pageName}
      </button>
    </Link>
  );
};
export default NavButton;