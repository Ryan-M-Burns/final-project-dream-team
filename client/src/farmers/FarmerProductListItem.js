import axios from 'axios';
import React, { useState } from 'react';
import ProductForm from './ProductForm';
const FarmerProductListItem = ({ product, setProducts, state }) => {

  const [edit, setEdit] = useState(false)

  const handleChange = (event, value) => {
    const newProducts = [...state.products]
    newProducts[product.id - 1] = {
      ...product,
      [value] : event.target.value
    }
    setProducts(newProducts)
  }

  const handleSave = (product) => {
    axios.put('/products:id', product)
    setEdit(!edit)
  }

  
  return (
    !edit ?
    <li className="li__product-item">
      <h5 className="product-name">{product.title}</h5>
      <div>
        <div className="div__product-info">
          <div className="div__product-item">
            <p>Price:</p>
            <p className="product-price">{product.price}</p>
          </div>
          <div className="div__product-item">
            <p>Size:</p>
            <p className="product-size">{product.size}</p>
          </div>
          <div className="div__product-size">
            <p>Category:</p>
            <p className="product-category">{product.category}</p>
          </div>
          <div className="div__product-quantity">
            <p>Quantity:</p>
            <p className="product-category">{product.quantity}</p>
          </div>
        </div>
          <img src={product.image_url} alt="food" />
       </div>
       <button onClick={() => (setEdit(!edit))}> Edit </button>
    </li>
    :
    
    <li>
      <ProductForm onSubmit={handleSave} defaultValues={product}/>
    </li>
  )

};

export default FarmerProductListItem;