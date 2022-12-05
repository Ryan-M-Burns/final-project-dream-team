import React from 'react';
import { Link } from 'react-router-dom';
import './Landing.scss';


const Landing = () => {
  return (
    <div className="column">
      <div className="landing__page">
        <img src="/images/test.png" alt="user" id="main" />
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
  );
};

export default Landing;
