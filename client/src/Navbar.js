import { React, useState, useRef } from 'react';
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
    userlogin,
  }) => {


  //About dropdown
  const [open, setOpen] = useState(false);

  //login
  const emailRef = useRef();
  const passwordRef = useRef();

  const loginClass = classNames("login__component", {
    "login__component--open": userlogin,
    "login__component--close": !userlogin
  });

  const handleLogin = async (event) => {
    event.preventDefault();

    //opens login form
    setUserlogin(true);

    //login form toggles when either field is empty and 'login' is clicked
    if ((!emailRef.current.value || !passwordRef.current.value) && userlogin) {
      setUserlogin(false);
    }

    const userInfo = users.find(user => user.email === emailRef.current.value);

    if (userInfo && userInfo.password === passwordRef.current.value) {
      setUser(userInfo);
      setUserlogin(false);
    }
  };

  //logout
  const handleLogout = async (event) => {
    event.preventDefault();
    await setUser(null);
    setOpen(false);
    passwordRef.current.value = null;

  };

  //Account dropdown
  const handleDropdown = () => {
    setOpen(!open);
  };

  return (
    <nav className="nav__main-site">
      <div className="nav__logo">
        <Link to='/home'>
          <img src="/images/high-res-logo-transparent-bg.png" alt="user" />
        </Link>
      </div>
      <div className="user__welcome button">
        {user && <button>Welcome back, {user.name}!</button>}
      </div>
      <div className="nav__buttons">
        <div className="login__nav">
          <form className="login__nav">
            <div className={loginClass}>
              <input
                className="login__input"
                id="user_email"
                type="text"
                placeholder="email"
                ref={emailRef}
              />
            </div>
            <div className={loginClass}>
              <input
                className="login__input"
                id="user_pass"
                type="password"
                placeholder="password"
                ref={passwordRef}
              />
            </div>
          </form>
        </div>
        {!user && <button onClick={handleLogin}>Login</button>}
        <div className="dropdown">
          {user && <button onClick={handleDropdown}>Account</button>}
          {open ? (
            <ul className="account">
              <li className="account-item">
                <button>
                  <p>
                    <img src="../images/user.png" alt="user" />
                    View your profile
                  </p>
                </button>
              </li>
              <li className="account-item">
                <button>
                  <p>
                    <img src="../images/order.png" alt="order" />
                    My orders
                  </p>
                </button>
              </li>
              <li className="account-item">
                <button onClick={handleLogout}>
                  <p>
                    <img src="../images/logout.png" alt="logout" />
                    Sign out
                  </p>
                </button>
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
          <button
            className="nav__cart"
            onClick={() => setCartDrawer(!showCart)}
          >
            <img src="../images/cart.png" alt="cart" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;