import axios from 'axios';
import React, { useRef } from 'react';
import { getFarms } from '../helpers/selectors';
import './CreateProduct.scss'

const CreateProduct = ({ state, addProduct, onSubmit }) => {
  const priceRef = useRef();
  const titleRef = useRef();
  const sizeRef = useRef();
  const categoryRef = useRef();
  const quantityRef = useRef();
  const image_urlRef = useRef();

  const farm = getFarms(state, state.farm);

  const handleSubmit = (event) => {
    event.preventDefault();
    const product = {
      farm_id: farm[0].id,
      title: titleRef.current.value,
      category: categoryRef.current.value,
      size: sizeRef.current.value,
      image_url: image_urlRef.current.value,
      price: priceRef.current.value * 100,
      quantity: quantityRef.current.value
    };
    axios.post('/products', product)
    .then((newProduct) => {
      addProduct(newProduct.data)
      console.log('newProd', newProduct.data)
    })
    onSubmit()
  };
    

    return (
    <div className="farmer-product-item">
     <h1>Enter New Product Details</h1>
      <form onSubmit={handleSubmit} >
        <p className="farmer-product-name"><input type='text' ref={titleRef} placeholder="Product Title" /></p>
        <p className="farmer-product-price"><input type='text' ref={priceRef} placeholder="Product Price" /></p>
        <p className="farmer-product-size"><input type='text' ref={sizeRef} placeholder='Product Size' /></p>
        <p className="farmer-product-category"><input type='text' ref={categoryRef} placeholder='Product Category' /></p>
        <p className="farmer-product-quantity"><input type='text' ref={quantityRef} placeholder="Product Quantity" /></p>
        <p><input type='text' ref={image_urlRef} placeholder="Image URL" />
        </p>
        <p><button type='submit'>Save</button></p>
      </form>
    </div>
  );
};

export default CreateProduct;