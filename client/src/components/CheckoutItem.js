import React from 'react';
import './CheckoutItem.scss';

const CheckoutItem = ({item}) => {
  return (
    <li className="checkout__item__container">
      <div className="checkout__item__left">
        <p>{item.title}</p>
        <img src={item.image_url} alt="product_image"></img>
      </div>
      <div className="checkout__item__left">
        <p>quantity: {item.quantity}</p>
        <p>total: {item.price * item.quantity}</p>
      </div >
    </li>
  );
};

export default CheckoutItem;