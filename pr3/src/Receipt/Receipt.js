// Receipt.js

import React, { Component } from 'react';
import { productList } from '../Products';
import Shop from './Shop';
import '../Style.css';

class Receipt extends Component {
  render() {
    const productsList = productList.map((product, index) => (
      <Shop key={index} product={product} />
    ));
    const total = productList.reduce(
      (acc, product) => acc + product.price * product.quantity,0
    );

    return (
      <div className="receipt-container">
        <h1 className="receipt-title">Сумма чека: {total} грн.</h1>
        <div>{productsList}</div>
      </div>
    );
  }
}

export default Receipt;
