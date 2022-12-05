import React, { useEffect, useState, useRef } from 'react'


const ProductForm = ({state, setProduct, addProduct}) => {
  const priceRef = useRef();
  const titleRef = useRef();
  const sizeRef = useRef();
  const categoryRef = useRef();
  const quantityRef = useRef();
  const image_urlRef = useRef();
  
  // useEffect(() => {
  //   if (state.product) {
  //     setProduct(state.product.title)
  //   }
  // }, [state.product])

  const handleSubmit = (event) => {
    event.preventDefault()
    setProduct()
  }

  return (
    <form onSubmit={handleSubmit}>
        <p className="farmer-product-name"><input type='text' ref={titleRef}/></p>
        <p className="farmer-product-price"><input type='text' ref={priceRef}/></p>
        <p className="farmer-product-size"><input type='text' ref={sizeRef}/></p>
        <p className="farmer-product-category"><input type='text' ref={categoryRef}/></p>
        <p className="farmer-product-quantity"><input type='text' ref={quantityRef}/></p>
        <p><input type='text' ref={image_urlRef}/>
        </p>
        <p><button type='submit'> Save</button></p>
    </form>
   
  )
}

export default ProductForm