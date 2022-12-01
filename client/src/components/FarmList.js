import React from 'react';
import FarmListItem from './FarmListItem';
import './FarmList.scss';
const FarmList = ({ farms }) => {
  const parsedFarmList = farms.map(farm => {
    return (
      <FarmListItem
        key={farm.id}
        farm={farm}
      />
    );
  });


  return (
    <ul className="farm-list">
      {parsedFarmList}
    </ul>
  );
};

export default FarmList;