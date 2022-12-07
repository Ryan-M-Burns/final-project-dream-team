import {useState, useEffect} from "react";
import axios from "axios";

// manage state for application data
const useApplicationData = () => {

  const [state, setState] = useState({
    farm: null,
    farms: [],
    product: [],
    products: [],
    cart: [],
    category: null,
    categories: [],
    price: null,
    users: [],
    user: null,
    cartDrawer: false,
    checkout: false,
    checkoutMsg: false,
    userlogin: false
  });
  // call data from scheduler-api database
  useEffect(() => {
    Promise.all([
      axios.get("/products"),
      axios.get("/farms"),
      axios.get("/categories"),
      axios.get("/users")
    ])
      .then(all => {
        const product = all[0].data;
        const products = all[0].data;
        const farms = all[1].data;
        const categories = all[2].data;
        const users = all[3].data;

        setState(prev => ({...prev, product, products, farms, categories, users}));
      });
  }, []);

  const setProduct = product => setState(prev => ({...prev, product}));

  const setFarm = farm => setState(prev => ({...prev, farm}));

  const setCategory = category => setState(prev => ({...prev, category}));

  const setPrice = price => setState(prev => ({...prev, price}));

  const setCart = cart => setState(prev => ({...prev, cart}));

  const setCheckout = checkout => setState(prev => ({...prev, checkout}));

  const setCheckoutMsg = checkoutMsg => setState(prev => ({...prev, checkoutMsg}));

  const addToCart = (product, up) => {
    const isFound = state.cart.some(element => {
      if (element.id === product.id) {
        return true;
      } else {
        return false;
      }
    });

    if (!isFound) {
      //if the product is new to the cart, we add that product + a cartQty key
      setState({...state, cart: [...state.cart, {...product, cartQty: 1}]});
    } else {
      up ? editCart(product, 1, 0) : editCart(product, -1, 0);
      if (product.cartQty === 0) {
        removeFromCart(product);
      }
    }

  };

  const removeFromCart = (toberemoved) => {
    const filterIndex = state.cart.findIndex((product) => product.id === toberemoved.id);

    state.cart.splice(filterIndex, 1);
    setState({...state, cart: state.cart});

  };

  const editCart = (product, valueOnAdd, userInput) => {
    const newCart = [...state.cart];
    const index = newCart.findIndex((selectProduct) => {
      return selectProduct.id === product.id;
    });

    newCart[index].cartQty = newCart[index].cartQty + valueOnAdd + userInput;
    setState(({...state, cart: newCart}));
  };

  const setUser = user => setState(prev => ({...prev, user}));

  const setCartDrawer = cartDrawer => setState(prev => ({...prev, cartDrawer}));

  const setUserlogin = userlogin => setState(prev => ({...prev, userlogin}));

  const editProduct = (product) => {
    const newProducts = [...state.products];
    const index = newProducts.findIndex((selectProduct) => {
      return selectProduct.id === product.id;
    });
    newProducts[index] = product;
    setState(({...state, products: newProducts}));
  };

  const addProduct = (product) => {
    setState(({...state, products: [...state.products, product]}));
  };
  // return current state, and functions for managing state

  return {
    state,
    editProduct,
    setFarm,
    setCategory,
    setPrice,
    setProduct,
    addProduct,
    setCart,
    addToCart,
    removeFromCart,
    setUser,
    setCartDrawer,
    setCheckout,
    setCheckoutMsg,
    setUserlogin
  };
};

export default useApplicationData;
