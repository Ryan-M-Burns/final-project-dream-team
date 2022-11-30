import React from 'react';
import './Landing.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCoffee} from '@fortawesome/free-solid-svg-icons';


const Landing = () => {
  return (
    <div className="column">
      {/* page 1 */}
      <div className="landing__page">
        <div className="title__andbuttons">
          <h1 id="title"> HARVEST </h1>
          <button id="visit">Visit our page</button>
          <div classnName="arrow">
            <FontAwesomeIcon icon="coffee" />
          </div>
        </div>
        {/* page 2 */}
        <div className="row__login">
          <div className="login">
            <p>Log in as a user</p>
            <form>
              <label>username</label>
              <input type="text"></input>
              <label>email</label>
              <input type="text"></input>
            </form>
          </div>
          <div className="login">
            <p>Log in as a farmer</p>
            <form>
              <label>username</label>
              <input type="text"></input>
              <label>email</label>
              <input type="text"></input>
            </form>
          </div>
        </div>
      </div>


    </div>
  );
};

export default Landing;