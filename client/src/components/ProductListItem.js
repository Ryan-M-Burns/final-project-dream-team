import React from 'react';
import { Link } from "react-router-dom";
import './ProductListItem.scss';

const ProductListItem = ({ product, farm }) => {
  return (
    <li className="li__product-item">
      <div className="title__logo">
        <h5 className="product-name">{product.title}</h5>
        <img src={farm} alt="farm-logo" className="product-farm-icon" />
      </div>
      <div>
        <div className="div__product-info">
          <div className="div__product-item">
            <p>Price:</p>
            <p className="product-price">{product.price}</p>
          </div>
          <div className="div__product-item">
            <p>Pack Size:</p>
            <p className="product-size">{product.size}</p>
          </div>
        </div>
        <img src={product.image_url} alt="food" className="product__img" />
        <div>
          <Link to={`/product/${product.id}`}>
            <button>More</button>
          </Link>
        </div>
      </div>
    </li>
  );
};

export default ProductListItem;