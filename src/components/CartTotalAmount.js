import React from 'react';
import '../style.css';

export default function CartTotalAmount(props) {
  return (
    <>
      <div className="row product-row">
        <div className="col-6">
          <div className="">
            <h3>Total Amount:</h3>
          </div>
        </div>

        <div className="col-6">
          <div className="total-amount">
            <h3>{props.totalAmount}.00</h3>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-8 amount-in-word">
          <p>
            <strong> Amount in Words:</strong> {props.wordAmount} Rupees Only.
          </p>
        </div>
        <div className="col-2">
          <div className="pay-now">
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => {
                props.resetQuantity();
              }}
            >
              Reset
            </button>
          </div>
        </div>
        <div className="col-2">
          <div className="pay-now">
            <button type="button" className="btn btn-primary">
              Pay Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
