import React, { createContext, useContext, useState } from 'react'

const ProductContext = createContext()

export const ProductProvider = ({ children }) => {
	const [products, setProducts] = useState([
		{
			title: 'BlackBox',
			color: "Black",
			id: 0,
		},
		{
			title: 'BlueBox',
			color: "Blue",
			id: 1,
		},
		{
			title: 'GreenBox',
			color: "Green",
			id: 2,
		},
	])



	return (
		<ProductContext.Provider value={{products}}>
			{children}
		</ProductContext.Provider>
	)
}

export const useProducts = () => {
	return useContext(ProductContext)
}
