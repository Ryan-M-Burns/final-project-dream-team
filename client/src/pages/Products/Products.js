import { useState, useEffect, React } from 'react';
import './Products.scss';
import ProductList from '../../components/ProductList';
import axios from 'axios';

const Products = () => {
  const [products, setProducts] = useState([]);
  const getProducts = () => {
    axios.get("/products")
      .then(products => {
        setProducts(products.data);
      });

  };
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <ProductList products={products} />
  );
};

export default Products;