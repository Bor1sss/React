import React from 'react'
import ProductItem from './ProductItem'
import { useProducts } from '../context/ProductContext'
import ProductManagment from './ProductManagment'



function ProductList({ isAdmin }) {
	
	const {products,deleteProduct} = useProducts();
	console.log(products);

	return (
		<>
			<h1>ProductList</h1>
			
			<div className="product-list">
			  {products.map((item, index) => (
				  <div key={index} className="product-item">
					  <p>{item.name} | {item.description} | ${item.price} | {item.discount}%	
					  {isAdmin && (
                                <button onClick={() => deleteProduct(index)}>Delete</button>
                       )}
					  </p>
				  </div>
			  ))}
		  </div>
			<ProductItem />
		</>
	)
}

export default ProductList
