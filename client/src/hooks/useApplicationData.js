import { useState, useEffect } from "react";
import axios from "axios";

// manage state for application data
const useApplicationData = () => {

  const [state, setState] = useState({
    farm: null,
    farms: [],
    product: [],
    products: [],
    boxes: [],
    cart: [],
    categories: null,
    price: null
  });
  // call data from scheduler-api database
  useEffect(() => {
    Promise.all([
      axios.get("/products"),
      axios.get("/boxes"),
      axios.get("/farms")
    ])
      .then(all => {
        const products = all[0].data;
        const boxes = all[1].data;
        const farms = all[2].data;

        setState(prev => ({ ...prev, products, boxes, farms }));
      });
  }, []);

  const setProduct = product => setState(prev => ({ ...prev, product}))
  
  const setFarm = farm => setState(prev => ({ ...prev, farm }));

  const setBoxes = box => setState(prev => ({ ...prev, box }));

  const setCategory = category => setState(prev => ({ ...prev, category }));

  const setPrice = price => setState(prev => ({ ...prev, price }));

  // return current state, and functions for managing state
  return { state, setFarm, setBoxes, setCategory, setPrice, setProduct };
};

export default useApplicationData;