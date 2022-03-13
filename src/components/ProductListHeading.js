import React from 'react';
import '../style.css';

export default function ProductListHeading() {
  return (
    <div className="row product-row bg-dark text-white">
      <div className="col-4">
        <div className="product-name">
          <h4>
            <strong>Product</strong>
          </h4>
        </div>
      </div>
      <div className="col-2">
        <div className="product-price">
          <h4>
            <strong>Price</strong>
          </h4>
        </div>
      </div>
      <div className="col-2">
        <div className="product-quantity">
          <h4>
            <strong>Quantity</strong>
          </h4>
        </div>
      </div>
      <div className="col-2">
        <div className="product-quantity"></div>
      </div>
      <div className="col-2">
        <div className="product-price">
          <h4>
            <strong>Amount</strong>
          </h4>
        </div>
      </div>
    </div>
  );
}
