import React from 'react';

function Shop({ product }) {
	const totalProductPrice = product.price * product.quantity;
	return (
		<div >
			<h2 >{product.name}</h2>
			<p >Цена за 1шт: {product.price} грн.</p>
			<p >Кол-во: {product.quantity}</p>
			<p >Цена: {totalProductPrice} грн.</p>
		</div>
	);
}
export default Shop;
