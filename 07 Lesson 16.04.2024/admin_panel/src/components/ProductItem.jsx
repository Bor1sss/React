import React from 'react'
import { Link } from 'react-router-dom'

function ProductItem(props) {
	const { product } = props

	// Проверяем наличие product перед деструктуризацией
	const name = product ? product.name : ''
	const desc = product ? product.description : ''
	const id = product ? product.id : ''

	return (
		<Link to={`/product/${id}`}>
			<div className='item'>
				<h2>{name}</h2>
				<p>{desc}</p>
			</div>
		</Link>
	)
}

export default ProductItem
