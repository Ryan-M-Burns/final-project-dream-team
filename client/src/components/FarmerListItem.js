import React from 'react';
import {Link} from "react-router-dom";

const FarmerListItem = (props) => {


  return (
    <li>
      <h2>{props.name}</h2>
      <h2>{props.about}</h2>
      {props.is_family_owned && <h2>family owned</h2>}
      {props.is_organic && <h2>organic farm</h2>}
      <div>
        <Link to='/about'>
          <button>More</button>
        </Link>
      </div>
    </li>
  );
};

export default FarmerListItem;