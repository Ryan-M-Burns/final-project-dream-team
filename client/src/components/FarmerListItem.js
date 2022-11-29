import React from 'react';
import {Link} from "react-router-dom";

const FarmerListItem = ({farm}) => {

  return (
    <li>
      <h2>{farm.name}</h2>
      <h2>{farm.about}</h2>
      {farm.is_family_owned && <h2>family owned</h2>}
      {farm.is_organic && <h2>organic farm</h2>}
      <div>
        <Link to={`/our-farm/${farm.id}`}>
          <button>More</button>
        </Link>
      </div>
    </li>
  );
};

export default FarmerListItem;