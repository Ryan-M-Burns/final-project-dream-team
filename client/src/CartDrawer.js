import React from 'react';
import useApplicationData from "./hooks/useApplicationData";
import './CartDrawer.scss';

const CartDrawer = (props) => {

  const {
    state,
  } = useApplicationData();
  console.log("joehoeee", state.cart);

  let cartClasses = 'cart__container';

  if (props.show) {
    cartClasses = "cart__container open";
  }

  return (
    <div className={cartClasses}>
      <div>
        <h2>My Box</h2>
      </div>
      {state.cart.title}
      <div>

      </div>
    </div>

  );
};

export default CartDrawer;