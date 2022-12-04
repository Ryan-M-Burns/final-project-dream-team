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
      axios.get("/products"),
      axios.get("/boxes"),
      axios.get("/farms"),
      axios.get("/categories"),
      axios.get("/users")
    ])
      .then(all => {
        const product = all[0].data;
        const products = all[0].data;
        const boxes = all[1].data;
        const farms = all[2].data;
        const categories = all[3].data;
        const users = all[4].data;

        setState(prev => ({ ...prev, product, products, boxes, farms, categories, users }));
      });
  }, []);

  const setProduct = product => setState(prev => ({ ...prev, product }));

  const setFarm = farm => setState(prev => ({ ...prev, farm }));

  const setBox = box => setState(prev => ({ ...prev, box }));

  const setCategory = category => setState(prev => ({ ...prev, category }));

  const setPrice = price => setState(prev => ({ ...prev, price }));

  const setCart = cart => setState(prev => ({ ...prev, cart }));

  const addToCart = (product) => {
    setState({ ...state, cart: [...state.cart, product] });
  };


  const removeFromCart = (toberemoved) => {
    console.log('before', state.cart);
    const filterIndex = state.cart.findIndex((product) => product.id === toberemoved.id);

    const newCart = state.cart.splice(filterIndex, 1);
    setState({...state, cart: state.cart});

  };

  const setUser = user => setState(prev => ({...prev, user}));

  const setCartDrawer = cartDrawer => setState(prev => ({ ...prev, cartDrawer }));

  const addProduct = (product) => {
    setState(prev => ({ ...prev, products: [...state.products, product] }));
  };
  // return current state, and functions for managing state

  return {
    state,
    setFarm,
    setBox,
    setCategory,
    setPrice,
    setProduct,
    addProduct,
    setCart,
    addToCart,
    removeFromCart,
    setUser,
    setCartDrawer
  };
};

export default useApplicationData;
