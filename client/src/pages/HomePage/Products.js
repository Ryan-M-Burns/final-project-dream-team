import {useState, useEffect, React} from 'react';
import './Products.scss';
import ProductList from '../../components/ProductList';
import axios from 'axios';
// will be incorporated into home and 
const Products = () => {
  const [products, setProducts] = useState([]);
  const getProducts = () => {
    axios.get("/products")
      .then(products => {
        setProducts(products.data);
      });

 
      // state = {
      //   products,
      //   farms,
      //   boxes,
      //   categories,
      //   farm
      // }

  };
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <ProductList products={products} />
  );
};

export default Products;