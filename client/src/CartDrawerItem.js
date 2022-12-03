import React from 'react';
import './CartDrawerItem.scss';

const CartDrawerItem = ({product, addToCart, removeFromCart}) => {

  return (
    <div>
      <div>
        <p>{product.title}</p>
      </div>
      <div className="cart__image">
        <img src={product.image_url} alt="food" />
      </div>
      <div>
        <p>quantity: {product.quantity}</p>
      </div>
      <div className="cartitem__buttons">
        <button onClick={() => addToCart(product)}>Add</button>
        <button onClick={() => removeFromCart(product)}>Remove</button>
      </div>
    </div>
  );
};

export default CartDrawerItem;