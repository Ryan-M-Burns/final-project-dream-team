import {useState, useEffect, React} from 'react';
import './AboutFarms.scss';
import FarmerList from '../../components/FarmerList';
import axios from 'axios';

const OurFarm = (id) => {
  console.log('teeeeeeest', id);
  const [farm, setFarm] = useState([]);

  return (
    <p>test</p>
  );

};

export default OurFarm;
