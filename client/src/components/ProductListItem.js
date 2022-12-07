import React from 'react';
import './ProductListItem.scss';

const ProductListItem = ({ product, farm, addToCart, setCartDrawer }) => {

  const handleClick = () => {
    addToCart(product, true);
    setCartDrawer(true);
  };


  return (
    <li className="li__product-item">
      <img src={product.image_url} alt="food" className="product__img" />
      <div className="title__logo">
        <div className="div__product-item">
          <div>
            <h5 className="product-name">{product.title}</h5>
            <p className="product-size">{product.size}</p>
          </div>
          <h5 className="product-price">${(product.price / 100).toFixed(2)}</h5>
        </div>
        <div className="div__product-item-right">
          <img src={farm} alt="farm-logo" className="product-farm-icon" />
          <div className="add-to-cart-button">
            <button onClick={handleClick}>Add To Cart</button>
          </div>
        </div>
      </div>
    </li>
  );
};

export default ProductListItem;