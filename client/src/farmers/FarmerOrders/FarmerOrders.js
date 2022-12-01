import React from 'react'
import FarmerOrderSummary from './FarmerOrderSummary';
import FarmerOrderUpcoming from './FarmerOrderUpcoming';


const FarmerOrders = () => {
  return (
    <div>
      <div className='total-orders--left'>
        <FarmerOrderSummary/>
      </div>
      <div className='upcoming-oders--right'>
        <FarmerOrderUpcoming/>
      </div>
    </div>
  )
}

export default FarmerOrders