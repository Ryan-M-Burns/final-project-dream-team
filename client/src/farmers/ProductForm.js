import axios from 'axios';
import  { React, useRef } from 'react';
import { getFarms } from '../helpers/selectors';

import './ProductForm.scss';


const ProductForm = ({ state, product, onSubmit, editProduct}) => {

  const priceRef = useRef();
  const titleRef = useRef();
  const sizeRef = useRef();
  const categoryRef = useRef();
  const quantityRef = useRef();
  const image_urlRef = useRef();

  const farm = getFarms(state, state.farm);
  const id = product.id
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
    
    axios.put(`/products/${id}`, product)
    editProduct(product)
    onSubmit()
  };

  return (
    <form onSubmit={handleSubmit} className="li__farmer-product-form-item">
      <p className="farmer-product-form-name"><input type='text' ref={titleRef} defaultValue={product.title} /></p>
      <p className="farmer-product-form-price"><input type='text' ref={priceRef} defaultValue={product.price} /></p>
      <p className="farmer-product-form-size"><input type='text' ref={sizeRef} defaultValue={product.size} /></p>
      <p className="farmer-product-form-category"><input type='text' ref={categoryRef} defaultValue={product.category} /></p>
      <p className="farmer-product-form-quantity"><input type='text' ref={quantityRef} defaultValue={product.quantity} /></p>
      <p><input type='text' ref={image_urlRef} defaultValue={product.image_url} />
      </p>
      <p className="farmer-product-form-button"><button type='submit'>Save</button></p>
    </form>
  );

};

export default ProductForm;