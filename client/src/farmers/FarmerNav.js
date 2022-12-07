import { React, useState } from 'react';
import './FarmerNav.scss';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const FarmerNav = ({ user, setUser }) => {
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

    <nav className="nav__farmer-site">
      <div className="farmer__nav__logo">
        <Link to='/farmer-home'>
          <img src="/images/high-res-logo-transparent-bg.png" alt="user" />
        </Link>
      </div>
      <div className="farmer__welcome">
        {user && <button>Welcome back, {user.name}!</button>}
      </div>
      <div className="farmer__nav__buttons">
        <div className="farmer__dropdown">
          {user && <button onClick={handleDropdown}>Account</button>}
          {open ? (
            <ul className="farmer__account">
              <li className="farmer__account-item">
                <Link to="/myfarm">
                  <button>
                    <p>
                      <img src="../images/user.png" alt="user"></img>View your profile
                    </p>
                  </button>

                </Link>
              </li>
              <li className="farmer__account-item">
                <Link to="/farmer-orders">
                  <button>
                    <p>
                      <img src="../images/order.png" alt="order" />
                      My orders
                    </p>
                  </button>
                </Link>
              </li>
              <li className="farmer__account-item">
                <Link to="/">
                  <button onClick={handleLogout}>
                    <p>
                      <img src="../images/logout.png" alt="logout" />
                      Sign out
                    </p>
                  </button>
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