import React from 'react';
import '../style.css';
import Product from './Product.js';

export default function ProductList(props) {
  return props.productList.length > 0 ? (
    props.productList.map((product, i) => {
      return (
        <Product
          product={product}
          key={i}
          increamentQuantity={props.increamentQuantity}
          decreamentQuantity={props.decreamentQuantity}
          removeItem={props.removeItem}
          
          index={i}
        />
      );
    })
  ) : (
    <h3 className="py-3">Please add items in your cart</h3>
  );
}
