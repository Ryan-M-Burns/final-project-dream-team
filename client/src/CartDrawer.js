import React from 'react';
import CartDrawerItem from './CartDrawerItem';
import classNames from 'classnames';
import './CartDrawer.scss';

const CartDrawer = ({cart, cartDrawer, addToCart, removeFromCart, setCheckout, checkout}) => {
  let parsedCartList = [];
  const cartClass = classNames("cart__container", {
    "cart__container--open": cartDrawer,
    "cart__container--close": !cartDrawer
  });

  const total = (currentCart) => {
    let price = 0;
    for (let item of currentCart) {
      price += item.price * item.cartQty;
    }
    return price;
  };

  if (cart.length) {
    parsedCartList = cart.map(item => {

      return (
        <CartDrawerItem
          key={item.id}
          product={item}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
      );
    });
  }


  return (
    <div className={cartClass}>
      <div>
        <h2>My Veggie Box</h2>
      </div>
      <div className="cart__body">
        <div className="cart__products">
          {cart.length > 0 && parsedCartList}
          {!cart.length && <p>Nothing to see here!</p>}
        </div>
        <div className="cart__checkout">
          {cart.length > 0 && <button onClick={() => setCheckout(true)}>
            <p>Checkout: $ {total(cart) / 100}</p>
          </button>}
        </div>
      </div>

    </div>
  );
};


export default CartDrawer;