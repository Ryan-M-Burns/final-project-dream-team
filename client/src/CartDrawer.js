import React from 'react';
import CartDrawerItem from './CartDrawerItem';
import classNames from 'classnames';
import './CartDrawer.scss';

const CartDrawer = ({ cart, cartDrawer }) => {
  let parsedCartList = [];
  const cartClass = classNames("cart__container", {
    "cart__container--open": cartDrawer,
    "cart__container--close": !cartDrawer
  });

  const total = (currentCart) => {
    let price = 0;
    for (let item of currentCart) {
      price += item.price;
    }
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