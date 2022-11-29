import React from 'react';
import FarmListItem from './FarmListItem';

const FarmList = ({farms}) => {
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