import axios from 'axios';
import React, {useEffect, useState} from 'react';
import FarmerOrderSummary from './FarmerOrderSummary';
import './FarmerOrders.scss';

const FarmerOrders = ({user}) => {
  const [orders, setOrders] = useState([]);
  const id = user.id;

  useEffect(() => {
    Promise.all([
      axios.get(`/orders/farms/${id}`),
    ])
      .then(all => {
        const orders = all[0].data;
        setOrders(orders);
      });
  }, []);

  const parsedOrders = orders.map((order, index) => {
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
  );
};

export default FarmerOrders;