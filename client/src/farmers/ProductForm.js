import React, { useEffect, useState } from 'react'

const ProductForm = (props) => {
  const [price, setPrice] = useState()
  const [title, setTitle] = useState()
  const [size, setSize] = useState()
  const [category, setCategory] = useState()
  const [quantity, setQuantity] = useState()
  const [image_url, setImage_url] = useState()

  useEffect(() => {
    if (props.product) {
      setName(props.product.title)
    }
  }, [props.product])

  const handleSubmit = (event) => {
    event.preventDefault()
    props.onSubmit({
      title,
      price,
      size,
      category,
      quantity,
      image_url
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <li className="li__product-item">
        <h5 className="product-name">Name:</h5>
        <input type='text' value="" onChange={(event) => {setTitle(event.target.value)}} className="product-name"/>
        <div>
          <div className="div__product-info">
            <div className="div__product-item">
              <p>Price:</p>
              <input type='text' value="" onChange={(event) => {setPrice(event.target.value)}} className="product-price"/>
            </div>
            <div className="div__product-size">
              <p>Size:</p>
              <input type='text' value="" onChange={(event) => {setSize(event.target.value)}} className="product-size"/>
            </div>
            <div className="div__product-category">
              <p>Category:</p>
              <input type='text' value="" onChange={(event) => {setCategory(event.target.value)}} className="product-category"/>
            </div>
            <div className="div__product-quantity">
              <p>Quantity:</p>
              <input type='text' value="" onChange={(event) => {setQuantity(event.target.value)}} className="product-quantity"/>
            </div>
          </div>
          <input type='text' value="" onChange={(event) => {setImage_url(event.target.value)}} className="product-image"/>
        </div>
        <button onClick={() => (handleSave())}> Save </button>
      </li>
    </form>
  )
}

export default ProductForm