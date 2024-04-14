// Shop.js

import React from 'react';
import '../Style.css';

function Shop({ product }) {
  const total = product.price * product.quantity;
  return (
    <div className="shop-container">
      <h2 className="shop-title">{product.name}</h2>
      <p className="shop-info">Цена за 1шт: {product.price} грн.</p>
      <p className="shop-info">Кол-во: {product.quantity}</p>
      <p className="shop-info">Цена: {total} грн.</p>
    </div>
  );
}

export default Shop;
