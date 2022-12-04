import axios from 'axios';
import React from 'react'


const FarmerOrderSummary = ({product, price, count, remaining, image}) => {
  console.log('count', count)
  const totalSales = Number(price / 100) * Number(count);
  console.log('sales', totalSales)

  return (
    <tr className="li__farmer-order-item">
      <td className="farmer-order-name">{product}</td>

      <td className="farmer-order-price">{totalSales}</td>
      <td className="farmer-order-size">{count}</td>
      <td className="farmer-order-category">{remaining}</td>
      <td><img
        src={image} alt="food"
        className="farmer-order-image"
      /></td>
    </tr>
  )
}

export default FarmerOrderSummary