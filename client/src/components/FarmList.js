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
        setFarm={() => value ? setFarm(null) : setFarm(farm.name)}
      />
    );
  });

  // const singleFarm = farms.map(farm => {
  //   if (farm.name === value) {
  //     return (
  //       <FarmListItem
  //         key={farm.id}
  //         logo={farm.logo_url}
  //         selected={value === farm.name}
  //         setFarm={() => setFarm(null)}
  //       />
  //     );
  //   }
  // });

  return (
    // !value ? (
      <ul className="farms-list">
        {parsedFarmList}
      </ul>
    // ) : (
    //   <ul className="farms-list">
    //     {singleFarm}
    //   </ul>
    // )
  );
};

export default FarmList;