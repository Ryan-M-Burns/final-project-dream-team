// future state: will become a .map of ProductList instead of making an axios call

import {useState, useEffect, React} from 'react';
import {useParams} from 'react-router-dom';

import axios from 'axios';
import {dividerClasses} from '@mui/material';

const Products = () => {
  const [product, setProduct] = useState([]);

  const params = useParams();
  const productId = params.id;


  const getProduct = () => {
    axios.get(`/products/${productId}`)
      .then(product => {
        setProduct(product.data[0]);
      });
  };
  useEffect(() => {
    getProduct();
  }, []);
  return (
    <div>
      <p>{product.title}</p>
      <p>{product.price}</p>
    </div>
  );
};

export default Products;