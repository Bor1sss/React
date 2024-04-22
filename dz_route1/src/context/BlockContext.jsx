import React, { createContext, useContext } from 'react'
import { useState } from 'react'
const ProductContext = createContext()

export const BlockProvider = ({ children }) => {
    const [products, setProducts] = useState([
		{
			title: 'Block',
			color: "blue",
			id: 0,
		},
        {
			title: 'Block2',
			color: "red",
			id: 1,
		},
    ])
    return (
        <div>
            	<ProductContext.Provider value={{products}}>
                    {children}
                </ProductContext.Provider>
        </div>
    );
}

export const useProducts = () => {
	return useContext(ProductContext)
}