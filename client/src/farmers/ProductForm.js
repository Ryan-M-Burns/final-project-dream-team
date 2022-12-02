import React, { useState } from 'react'

const ProductForm = () => {
  const [price, setPrice] = useState()
  const [name, setName] = useState()
  const [size, setSize] = useState()
  const [category, setCategory] = useState()
  const [quantity, setQuantity] = useState()

  return (
    <li className="li__product-item">
    <h5 className="product-name">""</h5>
    <div>
      <div className="div__product-info">
        <div className="div__product-item">
          <p>Price:</p>
          <input type='text' value="" onChange={(event) => {setPrice(event.target.value)}} className="product-price"/>
        </div>
        <div className="div__product-size">
          <p>Size:</p>
          <input type='text' value="" onChange={(event) => {setSize(event.target.value)}} className="product-size"/>
        </div>
        <div className="div__product-category">
          <p>Category:</p>
          <input type='text' value="" onChange={(event) => {setCategory(event.target.value)}} className="product-category"/>
        </div>
        <div className="div__product-quantity">
          <p>Quantity:</p>
          <input type='text' value="" onChange={(event) => {setQuantity(event.target.value)}} className="product-quantity"/>
        </div>
      </div>
        
     </div>
     <button onClick={() => (handleSave())}> Save </button>
  </li>
  )
}

export default ProductForm