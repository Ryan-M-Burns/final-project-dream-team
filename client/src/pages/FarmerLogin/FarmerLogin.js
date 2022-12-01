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
        <form>
          <label>username</label>
          <input type="text"></input>
          <label>email</label>
          <input type="text"></input>
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