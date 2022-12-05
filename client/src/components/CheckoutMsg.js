import React from 'react';
import './CheckoutMsg.scss';

const CheckoutMsg = ({user, setCheckoutMsg}) => {
  return (
    <div className="checkoutmsg__background">
      <div className='checkoutmsg__container'>
        <div className='checkoutmsg__header'>
          <button className="checkout__close" onClick={() => setCheckoutMsg(false)}>&times;</button>
        </div>
        <div className='checkoutmsg__body'>
          <p className='checkoutmsg__title'>Thank you for your order!</p>
          <p>A confirmation email has been sent to {user.email}</p>
          <img src="../images/checkout.png" alt="checkout_image">
          </img>
        </div>
      </div>
    </div>
  );
};

export default CheckoutMsg;