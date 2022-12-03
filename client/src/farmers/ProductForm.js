import React, { useEffect, useState, useRef } from 'react'


const ProductForm = ({state, setProduct, addProduct}) => {
  const priceRef = useRef();
  const titleRef = useRef();
  const sizeRef = useRef();
  const categoryRef = useRef();
  const quantityRef = useRef();
  const image_urlRef = useRef();
  
  useEffect(() => {
    const newProduct = {
      id: state.products.length,
      
    }
    if (state.product) {
      setProduct(state.product.title)
    }
  }, [state.product])

  const handleSubmit = (event) => {
    event.preventDefault()
    setProduct()
  }

  return (
    <form onSubmit={handleSubmit}>
      <li className="li__product-item">
        <h5 className="product-name">Name:</h5>
        <input type='text' ref={titleRef} className="product-name"/>
        <div>
          <div className="div__product-info">
            <div className="div__product-item">
              <p>Price:</p>
              <input type='text' ref={priceRef} className="product-price"/>
            </div>
            <div className="div__product-size">
              <p>Size:</p>
              <input type='text' value={sizeRef} className="div__product-size"/>
            </div>
            <div className="div__product-category">
              <p>Category:</p>
              <input type='text' value={categoryRef} className="product-category"/>
            </div>
            <div className="div__product-quantity">
              <p>Quantity:</p>
              <input type='text' value={quantityRef} className="product-quantity"/>
            </div>
          </div>
          <input type='text' value={image_urlRef} className="div__product-image"/>
        </div>
        <button type='submit'> Save </button>
      </li>
    </form>
  )
}

export default ProductForm