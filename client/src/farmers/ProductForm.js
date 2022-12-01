import React from 'react'

const productObj = {
  title,
  price,
  size,
  category,
  quantity,
  image_url
}

function validate() {
  if (title === "") {
    setError("Product title cannot be blank");
    return;
  }
  if (price === "") {
    setError("Price cannot be blank");
    return;
  }
  if (size === "") {
    setError("Size cannot be blank");
    return;
  }
  if (category === "") {
    setError("Category cannot be blank");
    return;
  }
  if (quantity === "") {
    setError("Quantity cannot be blank");
    return;
  }
  if (image_url === "") {
    setError("Please add an image to your product");
    return;
  }
  setError("");
  props.onSave(productObj);
};


const ProductForm = () => {
  return (
    <main className="appointment__card appointment__card--create">
    <section className="appointment__card-left">
      <form autoComplete="off" onSubmit={event => event.preventDefault()}>
        <input
          className="appointment__create-input text--semi-bold"
          name={student}
          type="text"
          placeholder="Enter Student Name"
          onChange={handleStudent}
          value={student}
          data-testid="student-name-input"
        />
        <section className="appointment__validation">{error}</section>
      </form> 
    </section>
      <section className="product__card-right">
        <section className="product__actions">
          <Button danger onClick={reset}>Cancel</Button>
          <Button confirm onClick={validate}>Save</Button>
        </section>
      </section>
    </main>
  );
}

export default ProductForm