import React from 'react';
import FarmerListItem from './FarmerListItem';

const FarmerList = (props) => {

  return (
    <ul>
      <FarmerListItem
        name="Nook's"
        about="growing killer plants since 1996"
        is_family_owned='true'
        is_organic={false}
      />
    </ul>
  );
};

export default FarmerList;