import {React, useState, useRef} from 'react';
import classNames from 'classnames';
import './Navbar.scss';
import {Link} from 'react-router-dom';

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

  // document.onclick = function(event) {
  //   console.log('open', open);
  //   if (open && event.target !== ".account-item") {
  //     setOpen(false);
  //   }
  // };

  //login
  const emailRef = useRef();
  const passwordRef = useRef();

  const loginClass = classNames("login__component", {
    "login__component--open": userlogin,
    "login__component--close": !userlogin
  });

  const handleLogin = async (event) => {
    event.preventDefault();
    console.log('lhandleLogin');

    //opens login form
    setUserlogin(true);
    console.log('passwordRef.current.value', passwordRef.current.value);
    console.log('emailRef.current.value', emailRef.current.value);
    console.log('emailRef', emailRef.current);
    console.log('passwordRef.current', passwordRef.current);

    //login form toggles when either field is empty and 'login' is clicked
    if ((!emailRef.current.value || !passwordRef.current.value) && userlogin) {
      setUserlogin(false);
      console.log('hide form');
    }

    const userInfo = users.find(user => user.email === emailRef.current.value);

    console.log('userInfo', userInfo);

    if (userInfo && userInfo.password === passwordRef.current.value) {
      console.log('loggedin');
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
          <button className="title">HARVEST</button>
        </Link>
      </div>
      {user && <button>Welcome back, {user.name}!</button>}
      <div className="nav__buttons">
        <div className="login__nav">
          <form className="login__nav">
            <div className={loginClass}>
              <label className="login__label" htmlFor="email">email</label>
              <input
                className="login__input"
                id="user_email"
                type="text"
                placeholder="username"
                ref={emailRef}
              />
            </div>
            <div className={loginClass}>
              <label className="login__label" htmlFor="password">password</label>
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
                  <p><img src="../images/user.png" alt="user" />
                    View your profile</p>
                </button>
              </li>
              <li className="account-item">
                <button>
                  <p>My orders</p>
                </button>
              </li>
              <li className="account-item">
                <button onClick={handleLogout}>
                  <p>Sign out</p>
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