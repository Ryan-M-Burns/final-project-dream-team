import axios from 'axios';
import React, { useState } from 'react';
import ProductForm from './ProductForm';
import Button from '../components/Button';
import './FarmerProductListItem.scss';

const FarmerProductListItem = ({ product, setProducts, state }) => {
  const [edit, setEdit] = useState(false);

  const handleChange = (event, value) => {
    const newProducts = [...state.products];
    newProducts[product.id - 1] = {
      ...product,
      [value]: event.target.value
    };
    setProducts(newProducts);
  };

  const handleSave = (product) => {
    axios.put('/products:id', product);
    setEdit(!edit);
  };


  return (
    !edit ? (
      <tr className="li__farmer-product-item">
        <td className="farmer-product-name">{product.title}</td>

        <td className="farmer-product-price">{product.price}</td>
        <td className="farmer-product-size">{product.size}</td>
        <td className="farmer-product-category">{product.category}</td>
        <td className="farmer-product-quantity">{product.quantity}</td>
        <td><img
          src={product.image_url} alt="food"
          className="farmer-product-image"
        /></td>
        <td>
          <button
            onClick={() => (setEdit(!edit))}
            type="button"
            className="farmer-product-button">
            <p>Edit {product.farm_id}</p>
          </button>
        </td>
        <td>
          <button
            onClick={() => (setEdit(!edit))}
            type="button"
            className="farmer-product-button">
            <p>Delete</p>
          </button>
        </td>
      </tr>
    ) : (

      <li>
        <ProductForm onSubmit={handleSave} defaultValues={product} />
      </li>
    )
  );

};

export default FarmerProductListItem;