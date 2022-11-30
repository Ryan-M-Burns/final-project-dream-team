import React from 'react';
import './Landing.scss';

const Landing = () => {
  return (
    <div className="column">
      {/* page 1 */}
      <div className="landing__page">
        <div className="title__andbuttons">
          <h1 id="title"> HARVEST </h1>
          <button>Visit our page</button>
        </div>
        <div classnName="arrow">
          hello
        </div>
      </div>

      {/* page 2 */}
      <div className="row__login">
        <div className="login">
          <form>
            <label>username</label>
            <input type="text"></input>
            <label>email</label>
            <input type="text"></input>
          </form>

        </div>
        <div className="login">

        </div>
      </div>

    </div>
  );
};

export default Landing;