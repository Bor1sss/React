import React from 'react'
import { Link } from 'react-router-dom'

function ProductItem(props) {
	const { boxes } = props

	// Проверяем наличие product перед деструктуризацией
	const title = boxes ? boxes.title : ''
	const color = boxes ? boxes.color : ''
	const id = boxes ? boxes.id : ''

	return (
		<Link to={`/product/${id}`}>
			<div className='item'  style={{ backgroundColor: color }}>
				<h2>{title}</h2>
			</div>
		</Link>
	)
}

export default ProductItem
