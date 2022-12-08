import './FarmerOrderSummary.scss';
import React from 'react';


const FarmerOrderSummary = (props) => {
  console.log('props', props);

  const remaining = props.stock - props.sum;

  const totalSales = (Number(props.price / 100) * Number(props.sum)).toFixed(2);

  return (
    <tr className="li__farmer-order-item">
      <td className="farmer-order-name">{props.product}</td>

      <td className="farmer-order-price">{totalSales}</td>
      <td className="farmer-order-size">{props.sum}</td>
      <td className="farmer-order-category">{remaining}</td>
      <td><img
        src={props.image} alt="food"
        className="farmer-order-image"
      /></td>
    </tr>
  );
};

export default FarmerOrderSummary;