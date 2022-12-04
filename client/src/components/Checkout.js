import React from 'react';
import './Checkout.scss';
import CheckoutItem from './CheckoutItem';


function Checkout({setCheckout, cart, user}) {
  console.log('user', user);

  const total = (currentCart) => {
    let price = 0;
    for (let item of currentCart) {
      price += item.price;
    }
    return price;
  };

  if (cart.length > 0) {

    let cartResult = [];
    let cartResultIds = [];

    for (let i = 0; i < cart.length; i++) {

      const id = cart[i].id;
      let index = null;

      if (!cartResultIds.includes(id)) {

        cartResult.push({id: cart[i].id, quantity: 1, title: cart[i].title, category: cart[i].category, size: cart[i].size, image_url: cart[i].image_url, price: cart[i].price});

        cartResultIds.push(cart[i].id);

      } else {
        index = cartResult.findIndex(object =>
          object.id === cart[i].id);
        cartResult[index].quantity++;
      }
    };

    const cartItems = cartResult.map(item => {

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
            <p>CHECKOUT</p>
            <button className="checkout__close" onClick={() => setCheckout(false)}>&times;</button>
          </div>
          <div className="checkout__body">

            <div className="checkout__orderinfo__left">
              <div classname="checkout_userinfo">
                {!user ? (
                  <div className="checkout__guest">
                    <button>Checkout as guest</button>
                    <p>or</p>
                    <button>Log in</button>
                  </div>
                )
                  :
                  (
                    <div className="checkout__user">
                      <h3>Email address</h3>
                      <p>{user.email}</p>
                    </div>
                  )}

              </div>

              <div className="checkout__footer">
                <button className="checkout__continue">Continue</button>
              </div>

            </div>
            <div className="checkout__iteminfo__right">
              <div className="checkout__items">
                <p>my items</p>
                <ul>
                  {cartItems}
                </ul>
                <p>Subtotal: {total(cart) / 10}</p>
                <p>GST: ({total(cart) / 10 * 0.12}</p>
                <p>Shipping: Free</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Checkout;