import React from 'react';
import './CheckoutItem.scss';

const CheckoutItem = ({ item }) => {
  return (
    <li className="checkout__item__container">
      <div className="cart__item">
        <div className="checkout__item__right">
          <p>{item.title}</p>
          <p>Qty: {item.cartQty}</p>
          <p>total: $ {item.price * item.cartQty / 100}</p>
        </div >
        <div className="cart__image">
          <img src={item.image_url} alt="product_image"></img>
        </div>
      </div>
    </li>
  );
};

export default CheckoutItem;