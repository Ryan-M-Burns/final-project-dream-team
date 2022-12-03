import React from 'react';

function Checkout({setCheckout, checkout}) {

  return (
    <div className="modal__container">
      <div className="modal__header">
        <p>CHECKOUT HERE</p>
        <button className="modal__close" onClick={() => setCheckout(!checkout)}>&times;</button>
      </div>
      <div className="modal__body">
        <p>test test test test</p>
      </div>
      <div className="modal__footer">
        <button className="modal__continue">Continue</button>
      </div>
    </div>
  );
}

export default Checkout;