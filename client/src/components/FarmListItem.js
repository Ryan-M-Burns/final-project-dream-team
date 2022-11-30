import React from 'react';

const FarmListItem = ({farm}) => {

  return (
    <li>
      <h2>{farm.name}</h2>
      <img>{farm.logo_url}</img>
    </li>
  );
};

export default FarmListItem;