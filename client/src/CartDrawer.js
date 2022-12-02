// import React from 'react';
// import CartDrawerItem from './CartDrawerItem';
// import useApplicationData from "./hooks/useApplicationData";
// import './CartDrawer.scss';

// const CartDrawer = (props) => {

//   const state = props.state;
//   const cart = state.cart;

//   let cartClasses = 'cart__container';

//   if (props.show) {
//     cartClasses = "cart__container open";
//   }

//   const total = (cart) => {
//     let price = 0;
//     for (let item of cart) {
//       price += item.price;
//     }
//     return price;
//   };

//   const parsedCartList = cart.map(item => {

//     return (
//       <CartDrawerItem
//         key={item.id}
//         product={item}
//       />
//     );
//   });

//   console.log("BIJNA", state.cart);

//   return (
//     <div className={cartClasses}>
//       <div>
//         <h2>My Box</h2>
//       </div>
//       <div>
//         <p>Box total: $ {total(cart)}</p>
//       </div>
//       <div className="cart__products">
//         {state.cart.length && parsedCartList}
//       </div>
//     </div>

//   );
// };

// export default CartDrawer;