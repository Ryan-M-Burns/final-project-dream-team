import { useState, useEffect } from "react";
import axios from "axios";

// manage state for application data
const useFarmAppData = () => {

  const [state, setState] = useState({
    farm: null,
    products: [],
    user: null,
  });
  // call data from scheduler-api database
  useEffect(() => {
    Promise.all([
      axios.get(`/products/${id}`),
      axios.get(`/farms/${id}`)
    ])
      .then(all => {
        const products = all[0].data;
        const farm = all[1].data;

        setState(prev => ({ ...prev, farm, products }));
      });
  }, []);

  const setProduct = product => setState(prev => ({ ...prev, product }));


  const addProduct = product => {

    return axios.put(`/products`, { product })
      .then(() => setState(prev => ({ ...prev, products: [...state.products, product] })));
  };

  const deleteProduct = product => {
    const productsCopy = state.products.filter(prodElement => prodElement.id !== product.id)
    return axios.delete('/products', { product })
    .then(() => setState(prev => ({ ...prev, products: productsCopy })));
  }

  return {
    state,
    addProduct,
    setProduct,
    deleteProduct
  };
};

export default useFarmAppData;
