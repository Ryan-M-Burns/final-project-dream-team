import React from 'react';
import { Link } from 'react-router-dom';
import './Landing.scss';


const Landing = () => {
  return (
    <div className="column">
      <div className="landing__page">
        <div className="title__andbuttons">
          <p id="main"> HARVEST </p>
          <p id="sub">Where farmers and high-quality produce lovers meet</p>
          <div className="title__andsub">
          </div>
          <div className="landing__buttons">
            <Link to='/home'>
              <button id="visit">Enter Site</button>
            </Link>
            <Link to='/farmer-login'>
              <button id="visit">Farmer Portal</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
