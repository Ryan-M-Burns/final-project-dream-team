import React from 'react';
import { Link } from 'react-router-dom';
import Home from '../HomePage/Home';
import './Landing.scss';


const Landing = () => {
  return (

    <div className="column">
      {/* page 1 */}
      <div className="landing__page">
        <div className="title__andbuttons">
          <p id="main"> HARVEST </p>
          <p id="sub">Where farmers and high-quality produce lovers meet</p>
          <div className="title__andsub">
          </div>
          <div className="landing__buttons">
            <button id="visit">Visit as customer</button>
            <button id="visit">Visit as farmer</button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Landing;