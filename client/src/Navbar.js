import { React, useState } from 'react';
import './Navbar.scss';
import { Link } from 'react-router-dom';

// Drop down menu for account
const Navbar = (
  {
    setUser,
    users,
    user,
    showCart,
    setCartDrawer
  }) => {
  const [open, setOpen] = useState(false);

  const handleDropdown = () => {
    setOpen(!open);
  };

  const LoginFunction = () => {

  };

  return (
    <nav>
      <Link to='/home'>
        <button className="title">HARVEST</button>
      </Link>
      <div className="nav_buttons">
        <div className="login__nav">
          <form className="login__nav">
            <div className="login__component">
              <label className="login__label">username</label>
              <input className="login__input" type="text" placeholder="username"></input>
            </div>
            <div className="login__component">
              <label className="login__label">password</label>
              <input className="login__input" type="text"></input>
            </div>
          </form>
          <button onClick={setUser}>Login</button>
        </div>
        <div className="dropdown">
          <button onClick={handleDropdown}>Account</button>
          {open ? (
            <ul className="account">
              <li className="account-item">
                <button><img src="../images/user.png" alt="user"></img>View your profile</button>
              </li>
              <li className="account-item">
                <button>My orders</button>
              </li>
              <li className="account-item">
                <button>Sign out</button>
              </li>
            </ul>
          ) : null}
        </div>
        <div>
          <Link to='/our-mission'>
            <button>About Us</button>
          </Link>
        </div>
        <div>
          <button className="nav__cart" onClick={() => setCartDrawer(!showCart)}><img src="../images/cart.png" alt="cart"></img></button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;