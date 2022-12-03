import { unstable_isMuiElement } from '@mui/utils';
import axios from 'axios';
import { useRef, React } from 'react';
import { useNavigate } from 'react-router-dom';
import './FarmerLogin.scss';


const FarmerLogin = ({ users, user, setUser }) => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();

  console.log(users, user, setUser, "farmer login props")

  const handleSubmit = async (event) => {
    event.preventDefault();

    const userInfo = users.find(user => user.email === emailRef.current.value);

    if (userInfo && userInfo.password === passwordRef.current.value) {
      setUser(userInfo.name);

      navigate("/home");

    }
  };

  return (
    <div className="row__login">
      <div className="login">
        <p>Howdy! please log in</p>
        <div className="images">
          <img src="../images/farmer.png" alt="farmer"></img>
          <img src="../images/farmeress.png" alt="farmeress"></img>
        </div>
        <form onSubmit={handleSubmit} className="farmer__login">
          <label htmlFor="email" className="farmer__label">Email</label>
          <input ref={emailRef} className="farmer__input" type="email"></input>
          <label htmlFor="password" className="farmer__label">password</label>
          <input ref={passwordRef} className="farmer__input" type="password"></input>
          <div>
            <button className="submit__button" type="submit" value="Submit">Submit</button>
          </div>
        </form >
      </div>
    </div>
  );
};

export default FarmerLogin;