import React from 'react';

const FarmerListItem = (props) => {


  return (
    <li>
      <h2>{props.name}</h2>
      <h2>{props.about}</h2>
      {props.is_family_owned && <h2>family owned</h2>}
      {props.is_organic && <h2>organic farm</h2>}
    </li>
  );
};

export default FarmerListItem;