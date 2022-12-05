import { React, useState } from 'react';
import classNames from 'classnames';
import './Navbar.scss';
import { Link } from 'react-router-dom';

// Drop down menu for account
const Navbar = (
  {
    setUser,
    users,
    user,
    showCart,
    setCartDrawer,
    setUserlogin,
    userlogin
  }) => {

  //About dropdown
  const [open, setOpen] = useState(false);

  const handleDropdown = () => {
    setOpen(!open);
  };

  const [username, setUserName] = useState();
  const [password, setPassword] = useState();


  //login logic
  const loginClass = classNames("login__component", {
    "login__component--open": userlogin,
    "login__component--close": !userlogin
  });

  const handleLogin = async (event) => {
    event.preventDefault();

    setUserlogin(true);

    const userInfo = users.find(user => user.name === username);

    if (userInfo && userInfo.password === password) {
      setUser(userInfo);
      console.log('userInfo', userInfo);
      setUserlogin(false);

    }
  };

  const handleLogout = async (event) => {
    event.preventDefault();
    setUser(null);
    setOpen(false);
  };

  return (
    <nav className="nav__main-site">
      <div className="nav__logo">
        <Link to='/home'>
          <button className="title">HARVEST</button>
        </Link>
      </div>
      {user && <button>Welcome back, {user.name}!</button>}
      <div className="nav__buttons">
        <div className="login__nav">
          <form className="login__nav">
            <div className={loginClass}>
              <label className="login__label">username</label>
              <input className="login__input" type="text" placeholder="username" onChange={e => setUserName(e.target.value)}></input>
            </div>
            <div className={loginClass}>
              <label className="login__label">password</label>
              <input className="login__input" type="password" placeholder="password" onChange={e => setPassword(e.target.value)}></input>
            </div>
          </form>
        </div>
        {!user && <button onClick={handleLogin}>Login</button>}
        <div className="dropdown">
          {user && <button onClick={handleDropdown}>Account</button>}
          {open ? (
            <ul className="account">
              <li className="account-item">
                <button><img src="../images/user.png" alt="user"></img>View your profile</button>
              </li>
              <li className="account-item">
                <button>My orders</button>
              </li>
              <li className="account-item">
                <button onClick={handleLogout}>Sign out</button>
              </li>
            </ul>
          ) : null}
        </div>
        <div>
          <Link to='/about'>
            <button>About Us</button>
          </Link>
        </div>
        <div>
          <button className="nav__cart" onClick={() => setCartDrawer(!showCart)}>
            <img src="../images/cart.png" alt="cart" />
            </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;