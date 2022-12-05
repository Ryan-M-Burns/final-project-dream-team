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
    <nav>
      <Link to='/home'>
        <button className="title">HARVEST</button>
      </Link>
      <div className="nav_buttons">
        {user && <button>Welcome back, {user}!</button>}
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
                <button>My orders</button>
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