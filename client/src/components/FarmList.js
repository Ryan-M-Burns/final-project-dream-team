import React from 'react';
import FarmListItem from './FarmListItem';
import './FarmList.scss';
const FarmList = ({ farms, value, setFarm }) => {
  
  const parsedFarmList = farms.map(farm => {
    return (
      <FarmListItem
        key={farm.id}
        logo={farm.logo_url}
        selected={value === farm.name}
        setFarm={() => setFarm(farm.name)}
      />
    );
  });


  return (
    <ul className="farms-list">
      {parsedFarmList}
    </ul>
  );
};

export default FarmList;