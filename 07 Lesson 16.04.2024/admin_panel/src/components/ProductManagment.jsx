import React from 'react'
import { useProducts } from '../context/ProductContext'
import { useState } from 'react';
import "../pages/Admin.css"

function ProductManagment() {
  const {products, addProduct} = useProducts();
	const [name, setName] = useState('');
	const [desc, setDesc] = useState('');
	const [price, setPrice] = useState('');
	const [discount, setDiscount] = useState('');



const handleAddProduct = () =>{
  const newProduct = {
    name: name,
    description: desc,
    price: price,
    discount: discount
  };
  console.log(newProduct.name)
  addProduct(newProduct)
  
}











  return (
    <>
     <div className="content">
		  <div className="wrap">
			  <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Product Name" />
			  <input type="text" value={desc} onChange={(e) => setDesc(e.target.value)} placeholder="Description" />
			  <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Price" />
			  <input type="number" value={discount} onChange={(e) => setDiscount(e.target.value)} placeholder="Discount" />
			  <button onClick={handleAddProduct}>Add</button>
		  </div>
		  
	  </div>
    </>
  )
}

export default ProductManagment
