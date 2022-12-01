import React from 'react';
import './FarmerLogin.scss';


const FarmerLogin = () => {
  return (

    <div className="row__login">
      <div className="login">
        <p>Howdy! please log in</p>
        <div className="images">
          <img src="../images/farmer.png" alt="farmer"></img>
          <img src="../images/farmeress.png" alt="farmeress"></img>
        </div>
        <form className="farmer__login">
          <label className="farmer__label">username</label>
          <input className="farmer__input" type="text"></input>
          <label className="farmer__label">password</label>
          <input className="farmer__input" type="text"></input>
        </form>
      </div>
      <div className="login__button">
        <button>
          <p>Login</p></button>
      </div>
    </div>
  );
};

export default FarmerLogin;