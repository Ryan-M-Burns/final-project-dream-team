import { useState, useEffect } from "react";
import axios from "axios";

// manage state for application data
const useFarmAppData = () => {

  const [state, setState] = useState({
    farm: null,
    farms: [],
    product: [],
    products: [],
    boxes: [],
    cart: [],
    category: null,
    categories: [],
    price: null,
    users: [],
    user: null,
    cartDrawer: false
  });
  // call data from scheduler-api database
  useEffect(() => {
    Promise.all([
      axios.get(`/products/${id}`),
      axios.get(`/farms/${id}`)
    ])
      .then(all => {
        const product = all[0].data;
        const products = all[0].data;
        const farm = all[1].data;

        setState(prev => ({ ...prev, product, products, farm }));
      });
  }, []);

  const setProduct = product => setState(prev => ({ ...prev, product }));


  const addProduct = (product) => {
    setState(prev => ({ ...prev, products: [...state.products, product] }));
  };
  // return current state, and functions for managing state

  return {

  };
};

export default useApplicationData;
