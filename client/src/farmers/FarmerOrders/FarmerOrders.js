import axios from 'axios';
import React, { useEffect, useState } from 'react'
import FarmerOrderSummary from './FarmerOrderSummary';


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
        setOrders([orders])
      });
  },[])

    const parsedOrders = orders.map((order, index) => (
      <FarmerOrderSummary
        key={index}
        product={order.title}
        price={order.price}
        count={order.count}
        remaining={order.quantity}
        image={order.image_url} />
    ));

  return (
    <div>
      <div className='total-orders--left'>
        {parsedOrders}
      </div>
    </div>
  )
}

export default FarmerOrders