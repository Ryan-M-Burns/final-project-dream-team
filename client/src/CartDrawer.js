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
      price += item.price;
    }
    return price;
  };

  // cartResult will have format: [{id: 5, quantity:3}, ...]
  if (cart.length > 0) {

    let cartResult = [];
    let cartResultIds = [];

    for (let i = 0; i < cart.length; i++) {

      const id = cart[i].id;
      let index = null;

      if (!cartResultIds.includes(id)) {

        cartResult.push({id: cart[i].id, quantity: 1, title: cart[i].title, category: cart[i].category, size: cart[i].size, image_url: cart[i].image_url, price: cart[i].price});

        cartResultIds.push(cart[i].id);

      } else {
        index = cartResult.findIndex(object =>
          object.id === cart[i].id);
        cartResult[index].quantity++;
      }
    };

    if (cart.length) {
      parsedCartList = cartResult.map(item => {

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
          <h2>My Box</h2>
        </div>
        <div>
          <div className="cart__products">
            {cart.length && parsedCartList}
          </div>
          <div>
            <button onClick={() => setCheckout(true)}>
              <p>Checkout: $ {total(cart) / 10}</p>
            </button>
          </div>
        </div>

      </div>

    );
  } else {
    return (
      <div className={cartClass}>
        <div>
          <h2>My Box</h2>
          <p>Nothin to see here!</p>
        </div></div>
    );
  }
};

export default CartDrawer;