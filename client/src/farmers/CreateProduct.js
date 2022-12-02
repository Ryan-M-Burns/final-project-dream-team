import React from 'react'

const CreateProduct = () => {
  function handleSubmit (formData) {
    axios.post('/products', formData).then(() => alert('you did it!'))
  }
  return <div>
    <h1>Hi! Let's make a product</h1>
    <ProductForm onSubmit={handleSubmit} />
   </div>
}

export default CreateProduct