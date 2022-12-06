import React from 'react';
import './CartDrawerItem.scss';


const CartDrawerItem = ({product, addToCart, removeFromCart}) => {


  return (
    <div>
      <div>
        <p>{product.title}: {product.size}</p>
      </div>
      <div className="cart__image">
        <img src={product.image_url} alt="food" />
      </div>
      <div className="cartitem__buttons">
        <div className="cartitem__buttons-left">
          <button className="plus" onClick={() => addToCart(product, true)}>+</button>
          <div>
            <p>{product.cartQty}</p>
          </div>
          <button className="minus" onClick={() => addToCart(product, false)}>-</button>
        </div>
        <div className="cartitem__buttons-right">
          <button className="minus-all" onClick={() => removeFromCart(product)}>Remove all</button>
        </div>
      </div>
    </div>
  );
};

export default CartDrawerItem;