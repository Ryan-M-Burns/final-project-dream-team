import axios from 'axios';
import React, { useEffect, useState } from 'react'
import FarmerOrderSummary from './FarmerOrderSummary';
import './FarmerOrders.scss';

const FarmerOrders = () => {
  const [orders, setOrders] = useState([])
  const id = 4;
  useEffect(() => {
  Promise.all([
      axios.get(`/orders/farms/${id}`),
    ])
      .then(all => {
        const orders = all[0].data
        console.log('orders', orders)
        setOrders(orders)
      });
  },[])
  
    const parsedOrders = orders.map((order, index) => {
      console.log('order', order)
    return (
      <FarmerOrderSummary
        key={index}
        product={order.title}
        price={order.price}
        count={order.count}
        remaining={order.quantity}
        image={order.image_url} />
    );
  });

    return (
      <table className="farmer-orders">
        <thead>
          <th>Product</th>
          <th>Total Sales</th>
          <th>Quantity Sold</th>
          <th>Stock Remaining</th>
          <th>Image</th>
        </thead>
        <tbody>
          {parsedOrders}
        </tbody>
      </table>
    )
}

export default FarmerOrders