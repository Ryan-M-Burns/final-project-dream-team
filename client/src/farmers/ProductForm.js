import React, { useEffect, useState, useRef } from 'react'


const ProductForm = (props) => {
  const price = useRef();
  const title = useRef();
  const size = useRef();
  const category = useRef();
  const quantity = useRef();
  const image_url = useRef();
  
  useEffect(() => {
    if (props.product) {
      setTitle(props.product.title)
    }
  }, [props.product])

  const handleSubmit = (event) => {
    event.preventDefault()
    props.onSubmit({
      title,
      price,
      size,
      category,
      quantity,
      image_url
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <li className="li__product-item">
        <h5 className="product-name">Name:</h5>
        <input type='text' value={title} onChange={(event) => {setTitle(event.target.value)}} className="product-name"/>
        <div>
          <div className="div__product-info">
            <div className="div__product-item">
              <p>Price:</p>
              <input type='text' value={price} onChange={(event) => {setPrice(event.target.value)}} className="product-price"/>
            </div>
            <div className="div__product-size">
              <p>Size:</p>
              <input type='text' value={size} onChange={(event) => {setSize(event.target.value)}} className="div__product-size"/>
            </div>
            <div className="div__product-category">
              <p>Category:</p>
              <input type='text' value={category} onChange={(event) => {setCategory(event.target.value)}} className="product-category"/>
            </div>
            <div className="div__product-quantity">
              <p>Quantity:</p>
              <input type='text' value={quantity} onChange={(event) => {setQuantity(event.target.value)}} className="product-quantity"/>
            </div>
          </div>
          <input type='text' value={image_url} onChange={(event) => {setImage_url(event.target.value)}} className="div__product-image"/>
        </div>
        <button type='submit'> Save </button>
      </li>
    </form>
  )
}

export default ProductForm