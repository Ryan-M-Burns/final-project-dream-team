import React from 'react';
import {Link} from "react-router-dom";
import './ProductListItem.scss';
const FarmerProductListItem = ({ product }) => {

  return (
    <li className="li__product-item">

      <h5 className="product-name">{product.title}</h5>
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
          <div className="div__product-item">
            <p>Farm:</p>
            <p className="product-category">{product.category}</p>
          </div>
          <div className="div__product-quantity">
            <p>Quantity:</p>
            <p className="product-category">{product.quantity}</p>
          </div>
        </div>
          <img src={product.image_url} alt="food" />
          <div>
            <Link to={`/product/${product.id}`}>
            <button>More</button>
            </Link>
          </div>
       </div>
    </li>
  );
};

export default FarmerProductListItem;