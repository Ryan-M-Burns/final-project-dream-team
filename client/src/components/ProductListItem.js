import React from 'react';
import './ProductListItem.scss';

const ProductListItem = ({ product, farm, addToCart, setCartDrawer }) => {

  const handleClick = () => {
    addToCart(product, true);
    setCartDrawer(true);
  };


  return (
    <li className="li__product-item">
      <div className="title__logo">
        <h5 className="product-name">{product.title}</h5>
        <img src={farm} alt="farm-logo" className="product-farm-icon" />
      </div>
      <div>
        <div className="div__product-info">

          <div className="div__product-item">
            <p>Pack Size:</p>
            <p className="product-size">{product.size}</p>
          </div>
        </div>
        <img src={product.image_url} alt="food" className="product__img" />
        <div className="add-to-cart-button">
          <button onClick={handleClick}>Add To Cart: ${(product.price / 100).toFixed(2)}</button>
        </div>
      </div>
    </li>
  );
};

export default ProductListItem;