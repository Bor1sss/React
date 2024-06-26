import React from 'react'
import ProductItem from './ProductItem'
import { useProducts } from '../context/ProductContext'


function ProductList() {
	const {products} = useProducts();
	// {} для того, чтобы выхватить products
	console.log(products);

	return (
		<>

			<h1>BOXES</h1>
			<div className="row">
				{
					products.map(item => <ProductItem key={item.id} boxes={item}/>)
				}
			</div>
			<ProductItem/>

		</>
	)
}

export default ProductList
