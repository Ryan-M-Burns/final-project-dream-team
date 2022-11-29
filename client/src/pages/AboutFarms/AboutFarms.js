import {useState, useEffect, React} from 'react';
import './AboutFarms.scss';
import FarmerList from '../../components/FarmerList';
import axios from 'axios';

const Farms = () => {
  const [farms, setFarms] = useState([]);

  const getFarms = () => {
    axios.get("/farms")
      .then(farms => {
        setFarms(farms.data);
      });
  };

  useEffect(() => {
    getFarms();
  }, []);

  console.log('testy2', farms);

  return (
    <FarmerList farms={farms} />
  );
};

export default Farms;
