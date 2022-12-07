import React from 'react';
import axios from 'axios';
import './Checkout.scss';
import CheckoutItem from './CheckoutItem';


function Checkout({ setCheckout, cart, user, setUserlogin, setCart, setCheckoutMsg, setCartDrawer }) {


  const handleLogIn = () => {
    setUserlogin(true);
    setCheckout(false);
  };

  const handleCheckout = async () => {
    axios.post('/orders', { userId: user.id, products: cart });

    setCheckout(false);
    setCheckoutMsg(true);
    setCart([]);
    setCartDrawer(false);

  };

  const total = (currentCart) => {
    let price = 0;
    for (let item of currentCart) {
      price += item.price * item.cartQty;
    }
    return price;
  };

  const cartItems = cart.map(item => {

    return (
      <CheckoutItem
        key={item.id}
        item={item}
      />
    );
  });


  return (
    <div className="checkout__background">
      <div className="checkout__container">
        <div className="checkout__header">
          <div className="checkout__close">
            <button onClick={() => setCheckout(false)}>&times;</button>
          </div>
          <div className="checkout__title">
            <p>CHECKOUT</p>
          </div>
        </div>
        <div className="checkout__body">

          <div className="checkout__orderinfo__left">
            <div className="checkout__userinfo">
              {!user ? (
                <div className="checkout__guest">
                  <button>Checkout as guest</button>
                  <p>or</p>
                  <button onClick={handleLogIn}>Log in</button>
                </div>
              )
                :
                (
                  <div className="checkout__user">
                    <h3>Customer name</h3>
                    <p>{user.name}</p>
                    <h3>Email address</h3>
                    <p>{user.email}</p>
                    <h3>Shipping Address</h3>
                    <p>{user.street}</p>
                    <p>{user.city}, {user.postal_code}</p>
                  </div>
                )}

            </div>

          </div>
          <div className="checkout__iteminfo__right">
            <p className='checkout__items__title'>My Cart</p>
            <div className="checkout__items">
              {cartItems}
            </div>
            <table className="checkout__totals">
              <tr>
                <th>Subtotal:</th>
                <td>$ {total(cart) / 100}</td>
              </tr>
              <tr>
                <th>GST:</th>
                <td>{(total(cart) / 100 * 0.12).toFixed(2)}</td>
              </tr>
              <tr>
                <th>Shipping:</th>
                <td>FREE</td>
              </tr>
              <tr>
                <th>Total:</th>
                <td>${((total(cart) / 100 * 0.12) + (total(cart)/ 100)).toFixed(2)}</td>
              </tr>
            </table>
          </div>
        </div>
        <div className="checkout__footer">
          {user && <button onClick={handleCheckout} className="checkout__continue">Place my order</button>}
        </div>
      </div>
    </div>
  );
}


export default Checkout;