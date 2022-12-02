import React from 'react';
import './FarmListItem.scss';
import classNames from 'classnames';



const FarmListItem = ({ logo, selected, setFarm }) => {
  const farmClass = classNames("farm-list__item", {
    "farm-list__item--selected": selected,
    "farm-list__item--normal": !selected
  });

  return (
    <li className={farmClass} onClick={setFarm}>
      <img src={logo} alt="farm_logo" className="farm-list__img" />
    </li>
  );
};

export default FarmListItem;