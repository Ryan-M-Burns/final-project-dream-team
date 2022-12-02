import React from 'react';
import CartDrawerItem from './CartDrawerItem';
import classNames from 'classnames';
import './CartDrawer.scss';

const CartDrawer = (show, cart) => {
  let parsedCartList = [];
  const cartClass = classNames("cart__container", {
    "cart__container--open": show,
    "cart__container--close": !show
  });

  const total = (cart) => {
    let price = 0;
    if (cart.length) {

      for (let item of cart) {
        price += item.price;
      }
    };
    return price;
  };

  if (cart.length) {
    parsedCartList = cart.map(item => {

      return (
        <CartDrawerItem
          key={item.id}
          product={item}
        />
      );
    });
  }
  
  console.log("BIJNA", cart);

  return (
    <div className={cartClass}>
      <div>
        <h2>My Box</h2>
      </div>
      <div>
        <p>Box total: $ {total(cart)}</p>
      </div>
      <div className="cart__products">
        {cart.length && parsedCartList}
      </div>
    </div>

  );
};

export default CartDrawer;