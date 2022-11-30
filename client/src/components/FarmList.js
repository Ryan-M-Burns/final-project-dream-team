import React from 'react';
import FarmListItem from './FarmListItem';

const FarmList = ({ farms }) => {
  console.log("Farmlist", farms);
  const parsedFarmList = farms.map(farm => {
    return (
      <FarmListItem
        key={farm.id}
        farm={farm}
      />
    );
  });


  return (
    <ul>
      {parsedFarmList}
    </ul>
  );
};

export default FarmList;