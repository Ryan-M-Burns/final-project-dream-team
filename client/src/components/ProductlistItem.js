import React from 'react';
import {Link} from "react-router-dom";

const ProductListItem = ({product}) => {

  return (

    <li>
      <h2>{product.title}</h2>
      <h2>{product.price}</h2>
      <h2>{product.size}</h2>
      <h2>{product.category}</h2>
      <div>
        <Link to={`/product/${product.id}`}>
          <button>More</button>
        </Link>
      </div>
    </li>

  );
};

export default ProductListItem;