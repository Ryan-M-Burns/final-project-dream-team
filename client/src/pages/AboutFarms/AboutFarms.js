import React from 'react';
import './AboutFarms.scss';
import FarmerList from '../../components/FarmerList';

const Farm = () => {
  return (
    <>
      <div className='farm'>Where the 🍆 are grown 🚜</div>
      <FarmerList />
    </>
  );
};

export default Farm;
