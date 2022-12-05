import axios from 'axios';
import React, { useEffect, useState, useRef } from 'react';
import { getFarms } from '../helpers/selectors';
import './ProductForm.scss';

const ProductForm = ({ state, product }) => {
  const idRef = useRef()
  const priceRef = useRef();
  const titleRef = useRef();
  const sizeRef = useRef();
  const categoryRef = useRef();
  const quantityRef = useRef();
  const image_urlRef = useRef();

  const farm = getFarms(state, state.farm);
  const id = product.id
  console.log('product', product)
  // useEffect(() => {
  //   if (state.product) {
  //     setProduct(state.product.title);
  //   }
  // }, [state.product]);
  const handleSubmit = (event) => {
    event.preventDefault();
    const product = {
      id: id,
      farm_id: farm[0].id,
      title: titleRef.current.value,
      category: categoryRef.current.value,
      size: sizeRef.current.value,
      image_url: image_urlRef.current.value,
      price: priceRef.current.value,
      quantity: quantityRef.current.value
    };
    axios.put(`/products/${id}`, product);
    console.log("product", product);
  };

  return (
    <form onSubmit={handleSubmit} className="farmer-product-item">
      <p className="farmer-product-name"><input type='text' ref={titleRef} defaultValue={product.title || ""} /></p>
      <p className="farmer-product-price"><input type='text' ref={priceRef} defaultValue={product.price || ""} /></p>
      <p className="farmer-product-size"><input type='text' ref={sizeRef} defaultValue={product.size || ""} /></p>
      <p className="farmer-product-category"><input type='text' ref={categoryRef} defaultValue={product.category || ""} /></p>
      <p className="farmer-product-quantity"><input type='text' ref={quantityRef} defaultValue={product.quantity || ""} /></p>
      <p><input type='text' ref={image_urlRef} defaultValue={product.image_url || ""} />
      </p>
      <p><button type='submit'> Save</button></p>
    </form>
  );

};

export default ProductForm;