import React from 'react';
import { Link } from 'react-router-dom';
import './Landing.scss';


const Landing = () => {
  return (
    <div className="column">
      <div className="landing__page">
        <div className="split-screen">
          {/* Intentionally Empty */}
        </div>
        <div className="split-screen">
          <img src="/images/test.png" alt="user" id="main" />
          <div className="title__andsub">
          </div>
          <div className="landing__buttons">
            <Link to='/home'>
              <button id="visit"> Enter Site </button>
            </Link>
            <Link to='/farmer-login'>
              <button id="farmer-portal__button">Farmer Portal</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
