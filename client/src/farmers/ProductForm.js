import React, { useEffect, useState } from 'react'

const ProductForm = (props) => {
  const [price, setPrice] = useState(props.defaultValues?.price || "")
  const [title, setTitle] = useState(props.defaultValues?.title || "")
  const [size, setSize] = useState(props.defaultValues?.size || "")
  const [category, setCategory] = useState(props.defaultValues?.category || "")
  const [quantity, setQuantity] = useState(props.defaultValues?.quantity || "")
  const [image_url, setImage_url] = useState(props.defaultValues?.image_url || "")

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
        <input type='text' value={title} onChange={(event) => {setTitle(event.target.value)}} className="product-name"/>
        <div>
          <div className="div__product-info">
            <div className="div__product-item">
              <p>Price:</p>
              <input type='text' value={price} onChange={(event) => {setPrice(event.target.value)}} className="product-price"/>
            </div>
            <div className="div__product-size">
              <p>Size:</p>
              <input type='text' value={size} onChange={(event) => {setSize(event.target.value)}} className="product-size"/>
            </div>
            <div className="div__product-category">
              <p>Category:</p>
              <input type='text' value={category} onChange={(event) => {setCategory(event.target.value)}} className="product-category"/>
            </div>
            <div className="div__product-quantity">
              <p>Quantity:</p>
              <input type='text' value={quantity} onChange={(event) => {setQuantity(event.target.value)}} className="product-quantity"/>
            </div>
          </div>
          <input type='text' value={image_url} onChange={(event) => {setImage_url(event.target.value)}} className="product-image"/>
        </div>
        <button type='submit'> Save </button>
      </li>
    </form>
  )
}

export default ProductForm