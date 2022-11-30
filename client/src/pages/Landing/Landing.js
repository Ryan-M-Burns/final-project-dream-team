import React from 'react';
import './Landing.scss';

const Landing = () => {
  return (
    <div className="column">
      {/* page 1 */}
      <div className="landing__page">
        <div className="title__andbuttons">
          <h1 className="title"> HARVEST </h1>
          <button>Visit our page</button>
        </div>
        <div>
          <img></img>
        </div>
      </div>

      {/* page 2 */}
      <div className="row__login">
        <div className="user__login">

        </div>
        <div className="farmer__login">

        </div>
      </div>

    </div>
  );
};

export default Landing;