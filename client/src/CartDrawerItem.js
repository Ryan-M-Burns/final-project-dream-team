import React from 'react';
import './CartDrawerItem.scss';


const CartDrawerItem = ({ product, addToCart, removeFromCart }) => {


  return (
    <div className="cart__item">
      <p className="cart-item__title">{product.title}</p>
      <p className="cart-item__size">{product.size}</p>
      <div className="cart__image">
        <img src={product.image_url} alt="food" />
      </div>

      <div className="cartitem__buttons-container">
        <div className="cartitem__buttons">
          <div className="cartitem__buttons-left">
            <button className="minus" onClick={() => addToCart(product, false)}>
              <span>-</span>
            </button>
          </div>
          <p>{product.cartQty}</p>
          <div className="cartitem__buttons-left">
            <button className="plus" onClick={() => addToCart(product, true)}>
              <span>+</span>
            </button>
          </div>
        </div>
        <div className="cartitem__buttons-right">

          <button className="minus-all" onClick={() => removeFromCart(product)}>Remove all</button>
        </div>
      </div>
    </div>
  );
};

export default CartDrawerItem;