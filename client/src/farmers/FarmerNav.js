import {React, useState} from 'react';
import './FarmerNav.scss';
import {useNavigate} from 'react-router-dom';
import {Link} from 'react-router-dom';

const FarmerNav = ({user, setUser}) => {
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();

  const handleDropdown = () => {
    setOpen(!open);
  };

  const handleLogout = async (event) => {
    event.preventDefault();
    setUser(null);
    setOpen(false);
    navigate("/");
  };


  return (
    <nav className="nav__main-site">
      <div className="nav__logo">
        <Link to='/farmer-home'>
          <img src="/images/high-res-logo-transparent-bg.png" alt="user" />
        </Link>
      </div>
        {user && <button>Welcome back, {user}!</button>}
      <div className="nav_buttons">
        <div className="dropdown">
          {user && <button onClick={handleDropdown}>Account</button>}
          {open ? (
            <ul className="account">
              <li className="account-item">
                <Link to="/myfarm">
                  <button><img src="../images/user.png" alt="user"></img>View your profile</button>
                </Link>
              </li>
              <li className="account-item">
                <Link to="/farmer-orders">
                  <button>My orders</button>
                </Link>
              </li>
              <li className="account-item">
                <Link to="/">
                  <button onClick={handleLogout}>Sign out</button>
                </Link>
              </li>
            </ul>
          ) : null}
        </div>
        <div>
          <Link to='/about'>
            <button>About Us</button>
          </Link>
        </div>
      </div>
    </nav >
  );
};


export default FarmerNav;