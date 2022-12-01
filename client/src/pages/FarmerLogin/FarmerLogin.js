import React from 'react';
import './Landing.scss';


const FarmerLogin = () => {
  return (

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
  );
};

export default FarmerLogin;