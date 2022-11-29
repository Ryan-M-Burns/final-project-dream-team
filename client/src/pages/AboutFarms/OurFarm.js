import {useState, useEffect, React} from 'react';
import {useParams} from 'react-router-dom';
import './AboutFarms.scss';
import axios from 'axios';

const OurFarm = () => {
  const [farm, setFarm] = useState([]);

  const params = useParams();
  const farmId = Number(params.id);


  const getFarm = () => {
    axios.get(`/farms/${farmId}`)
      .then(farm => {
        setFarm(farm.data[0]);
      });
  };

  useEffect(() => {
    getFarm();
  }, []);

  return (
    <p>{farm.description}</p>
  );

};

export default OurFarm;
