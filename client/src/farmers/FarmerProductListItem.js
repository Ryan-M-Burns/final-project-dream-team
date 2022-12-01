import React, { useState } from 'react';
const FarmerProductListItem = ({ product, setProduct }) => {

  const [edit, setEdit] = useState(false)
  const handleChange = (event, value) => {
    setProduct(prev => {return {...prev, [value] : event.target.value}})
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

    <li className="li__product-item">
    <h5 className="product-name">{product.title}</h5>
    <div>
      <div className="div__product-info">
        <div className="div__product-item">
          <p>Price:</p>
          <input type='text' value={product.price} onChange={(event) => {handleChange(event, 'price')}}className="product-price"/>
        </div>
        <div className="div__product-size">
          <p>Size:</p>
          <input type='text' value={product.size} onChange={(event) => {handleChange(event, 'size')}}className="product-size"/>
        </div>
        <div className="div__product-category">
          <p>Category:</p>
          <input type='text' value={product.category} onChange={(event) => {handleChange(event, 'category')}}className="product-category"/>
        </div>
        <div className="div__product-quantity">
          <p>Quantity:</p>
          <input type='text' value={product.quantity} onChange={(event) => {handleChange(event, 'quantity')}}className="product-quantity"/>
        </div>
      </div>
        <img src={product.image_url} alt="food" />
     </div>
     <button onClick={() => (setEdit(!edit))}> Save </button>
  </li>
  )
  


};

export default FarmerProductListItem;