import './FarmerOrderSummary.scss';
import React from 'react'


const FarmerOrderSummary = (props) => {
  const totalSales = Number(props.price / 100) * Number(props.count);
  
  return (
    <tr className="li__farmer-order-item">
      <td className="farmer-order-name">{props.product}</td>

      <td className="farmer-order-price">{totalSales}</td>
      <td className="farmer-order-size">{props.count}</td>
      <td className="farmer-order-category">{props.remaining}</td>
      <td><img
        src={props.image} alt="food"
        className="farmer-order-image"
      /></td>
    </tr>
  )
}

export default FarmerOrderSummary