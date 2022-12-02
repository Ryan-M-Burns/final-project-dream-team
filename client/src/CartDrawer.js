import React from 'react';
import CartDrawerItem from './CartDrawerItem';
import useApplicationData from "./hooks/useApplicationData";
import './CartDrawer.scss';

const CartDrawer = (props) => {

  const state = props.state;

  console.log('YAY', state);
  console.log('YAYYYY', state.cart.title);

  let cartClasses = 'cart__container';

  if (props.show) {
    cartClasses = "cart__container open";
  }

  const parsedCartList = state.cart.map(item => {

    return (
      <CartDrawerItem
        key={item.id}
        product={item}
      />
    );
  });

  console.log("BIJNA", state.cart);

  return (
    <div className={cartClasses}>
      <div>
        <h2>My Box</h2>
      </div>
      <div className="cart__products">
        {state.cart.length && parsedCartList}
      </div>
    </div>

  );
};

export default CartDrawer;