import {unstable_isMuiElement} from '@mui/utils';
import axios from 'axios';
import {useState, useEffect, React} from 'react';
import './FarmerLogin.scss';
import {Link} from 'react-router-dom';


const FarmerLogin = () => {
  const [user, setUser] = useState("");
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const getUsers = () => {
    axios.get('/users');
  };

  // useEffect(() => {
  //   getUser();
  // }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const users = await getUsers();

    const userInfo = users.find(user => user.name === username);

    if (userInfo && user.password === password) {
      setUser(userInfo);
      window.location.href = "about";
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
        <form className="farmer__login">
          <label className="farmer__label">username</label>
          <input className="farmer__input" type="text" onChange={e => setUserName(e.target.value)}></input>
          <label className="farmer__label">password</label>
          <input className="farmer__input" type="password" onChange={e => setPassword(e.target.value)}></input>
          <div>
            <Link to='/home'>
              <input className="submit__button" type="submit" value="Submit" onSubmit={handleSubmit}></input>
            </Link>
          </div>
        </form >
      </div>
    </div>
  );
};

export default FarmerLogin;