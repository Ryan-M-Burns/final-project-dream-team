import React, { useEffect, useState, useRef } from 'react'


const ProductForm = ({ product, setProduct, addProduct }) => {
    const [name, setName] = useState()
    const [price, setPrice] = useState()
    const [size, setSize] = useState()
    const [category, setCategory] = useState()
    const [quantity, setQuantity] = useState()
    const [image_url, setImage_url] = useState()
  
  // useEffect(() => {
  //   if (state.product) {
  //     setProduct(state.product.title)
  //   }
  // }, [state.product])

  const handleSubmit = (event) => {
    event.preventDefault()
    props.onSubmit({
      name,
      price,
      size,
      category,
      quantity,
      image_url
    })
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

import React, { useEffect, useState, useRef } from 'react';
import { getFarms } from '../helpers/selectors';

const ProductForm = ({ state, setProduct, addProduct }) => {
  const priceRef = useRef();
  const titleRef = useRef();
  const sizeRef = useRef();
  const categoryRef = useRef();
  const quantityRef = useRef();
  const image_urlRef = useRef();

  const farm = getFarms(state, state.farm);
  // useEffect(() => {
  //   if (state.product) {
  //     setProduct(state.product.title);
  //   }
  // }, [state.product]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const product = {
      farm_id: farm.id,
      title: titleRef.current.value,
      category: categoryRef.current.value,
      size: sizeRef.current.value,
      image_url: image_urlRef.current.value,
      price: priceRef.current.value,
      quantity: quantityRef.current.value
    };
    console.log("product", product);
  };

  return (
    <form onSubmit={handleSubmit}>
      <p className="farmer-product-name"><input type='text' ref={titleRef} defaultValue={titleRef} /></p>
      <p className="farmer-product-price"><input type='text' ref={priceRef} defaultValue={priceRef} /></p>
      <p className="farmer-product-size"><input type='text' ref={sizeRef} defaultValue={sizeRef} /></p>
      <p className="farmer-product-category"><input type='text' ref={categoryRef} defaultValue={categoryRef} /></p>
      <p className="farmer-product-quantity"><input type='text' ref={quantityRef} defaultValue={quantityRef} /></p>
      <p><input type='text' ref={image_urlRef} defaultValue={image_urlRef} />
      </p>
      <p><button type='submit'> Save</button></p>
    </form>
  );

};

export default ProductForm;