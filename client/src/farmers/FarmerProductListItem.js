import React from 'react';
import useVisualMode from '../hooks/useVisualMode';
import './ProductListItem.scss';
const FarmerProductListItem = ({ product }) => {

const EMPTY = "EMPTY";
const SHOW = "SHOW";
const CREATE = "CREATE";
const SAVING = "SAVING";
const DELETING = "DELETING";
const CONFIRM = "CONFIRM";
const EDIT = "EDIT";
const ERROR_SAVE = "ERROR_SAVE";
const ERROR_DELETE = "ERROR_DELETE";

const { mode, transition, back } = useVisualMode(SHOW)





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
       </div>
    </li>
  );
};

export default FarmerProductListItem;