import React from 'react';

import './CartDrawer.scss';

function cartDrawer(props) {

  let cartClasses = 'cart__container';

  if (props.show) {
    cartClasses = "cart__container open";
  }

  return (
    <div className={cartClasses}>
      <h2>My Cart</h2>
    </div>
  );
};

export default cartDrawer;