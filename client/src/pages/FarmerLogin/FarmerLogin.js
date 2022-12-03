import { unstable_isMuiElement } from '@mui/utils';
import axios from 'axios';
import { useRef, React } from 'react';
import './FarmerLogin.scss';



const FarmerLogin = ({farms, users, setUser, setFarm}) => {
  const navigate = useNavigate();


  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const userInfo = users.find(user => user.email === email);
    const farmInfo = farms.find(farm => farm.user_id === userInfo.id)
    if (userInfo && userInfo.password === password) {
      setUser(userInfo.name);
      setFarm(farmInfo)
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
        <form className="farmer__login">
          <label className="farmer__label">email</label>
          <input className="farmer__input" type="text" onChange={e => setEmail(e.target.value)}></input>
          <label className="farmer__label">password</label>
          <input className="farmer__input" type="password" onChange={e => setPassword(e.target.value)}></input>
          <div>
            <button className="submit__button" type="submit" value="Submit">Submit</button>
          </div>
        </form >
      </div>
    </div>
  );
};

export default FarmerLogin;

