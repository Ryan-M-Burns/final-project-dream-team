import axios from 'axios';
import React, { useState } from 'react'
import FarmerOrderSummary from './FarmerOrderSummary';
import FarmerOrderUpcoming from './FarmerOrderUpcoming';


const FarmerOrders = () => {
  const [orders, setOrders] = useState()

  Promise.all([
    axios.get("/orders/farms/4"),
  ])
    .then(all => {
      const orders = all[0].data;
      setOrders(orders)
    });
    
    const parsedOrders = orders.map((order) => (
      <FarmerOrderSummary
        key={order.id}
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