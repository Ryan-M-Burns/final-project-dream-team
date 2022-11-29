import React from 'react';
import FarmerListItem from './FarmerListItem';

const FarmerList = ({farms}) => {
  const parsedFarmerList = farms.map(farm => {
    return (
      <FarmerListItem
        key={farm.id}
        farm={farm}
      />
    );
  });


  return (
    <ul>
      {parsedFarmerList}
    </ul>
  );
};

export default FarmerList;