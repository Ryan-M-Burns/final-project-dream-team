import React from 'react';

const FarmListItem = ({farm}) => {

  return (
    <li>
      <h2>{farm.name}</h2>
      <img src={farm.logo_url} alt="farm_logo" />
    </li>
  );
};

export default FarmListItem;