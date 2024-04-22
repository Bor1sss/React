import React, { createContext, useContext, useState } from 'react'

const ProductContext = createContext()

export const ProductProvider = ({ children }) => {
	const [products, setProducts] = useState([]);
	const [name, setName] = useState('');
	const [desc, setDesc] = useState('');
	const [price, setPrice] = useState('');
	const [discount, setDiscount] = useState('');

	const addProduct = (newProduct) => {
		setProducts([...products, newProduct])
	  
		setName('');
		setDesc('');
		setPrice('');
		setDiscount('');
	};
  
	const deleteProduct = (productId) => {
		console.log("delete")
		const Product = [...products];
		Product.splice(productId,1);
		setProducts(Product);
	}


	return (
		<ProductContext.Provider value={{products, addProduct, deleteProduct}}>
			{children}
		</ProductContext.Provider>
	)
}

export const useProducts = () => {
	return useContext(ProductContext)
}
