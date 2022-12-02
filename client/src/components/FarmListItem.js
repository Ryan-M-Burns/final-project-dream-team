import React from 'react';
import './FarmListItem.scss';
const FarmListItem = ({ farm }) => {
  return (
    <li>
      <img src={farm.logo_url} alt="farm_logo" className="farm-logo" />
    </li>
  );
};

export default FarmListItem;