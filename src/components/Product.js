import React from 'react';
import '../style.css';

export default function Product(props) {
  return (
    <div className="row product-row">
      <div className="col-4">
        <div className="product-name">
          <h4>{props.product.name}</h4>
        </div>
      </div>
      <div className="col-2">
        <div className="product-price">
          <h4>{props.product.price}.00</h4>
        </div>
      </div>
      <div className="col-2">
        <div className="product-quantity">
          <div class="btn-group" role="group" aria-label="Basic example">
            <button
              type="button"
              class="btn btn-secondary"
              onClick={() => {
                props.decreamentQuantity(props.index);
              }}
            >
              -
            </button>
            <button type="button" class="btn btn-secondary">
              {props.product.quantity}
            </button>
            <button
              type="button"
              class="btn btn-secondary"
              onClick={() => {
                props.increamentQuantity(props.index);
              }}
            >
              +
            </button>
          </div>
        </div>
      </div>
      <div className="col-2">
        <div className="delete-items">
          <button
            type="button"
            class="btn btn-danger"
            onClick={() => {
              props.removeItem(props.index);
            }}
          >
            <i class="fa fa-trash" aria-hidden="true"></i>
          </button>
        </div>
      </div>
      <div className="col-2">
        <div className="product-price">
          <h4>{props.product.price * props.product.quantity}.00</h4>
        </div>
      </div>
    </div>
  );
}
