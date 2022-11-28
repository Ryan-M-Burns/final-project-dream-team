import React from 'react';
import {Link} from "react-router-dom";

const FarmerListItem = ({
  key,
  name,
  about,
  is_family_owned,
  is_organic,
  selected,
  onChange
}) => {


  return (
    <li>
      <h2>{name}</h2>
      <h2>{about}</h2>
      {is_family_owned && <h2>family owned</h2>}
      {is_organic && <h2>organic farm</h2>}
      <div>
        <Link to='/about'>
          <button>More</button>
        </Link>
      </div>
    </li>
  );
};

export default FarmerListItem;