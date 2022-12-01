import React from 'react';
import { Link } from 'react-router-dom';
import Home from '../HomePage/Home';
import './Landing.scss';

const Landing = () => {
  return (
    <>
      <h1>Harvest</h1>
      <h2> Slogan </h2>
      <Link to="/home">Enter Main Site</Link>
      <Link to="/farmer-portal">Farmer Portal</Link>
      <Link to="/farmer-home-test">Farmer Portal</Link>
    </>
  );
};

export default Landing;