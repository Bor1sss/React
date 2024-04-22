import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';
import ProductList from '../components/ProductList'
import ProductManagment from '../components/ProductManagment';
function Admin() {
  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault();
    //
    navigate('/')
  }
//   const [products, setProducts] = useState([]);
//   const [name, setName] = useState('');
//   const [desc, setDesc] = useState('');
//   const [price, setPrice] = useState('');
//   const [discount, setDiscount] = useState('');

//   const addProduct = () => {
// 	  const newProduct = {
// 		  name: name,
// 		  description: desc,
// 		  price: price,
// 		  discount: discount
// 	  };
// 	  setProducts([...products, newProduct]);
	
// 	  setName('');
// 	  setDesc('');
// 	  setPrice('');
// 	  setDiscount('');
//   };

//   const handleEdit = (index) => {
	
// 	const Product = [...products];
//     Product[index].name = name;
// 	Product[index].description = desc;
// 	Product[index].price = price;
// 	Product[index].discount = discount;

//     setProducts(Product);
//   };

//   const handleDelete = (index) => {
// 	const Product = [...products];
//     Product.splice(index,1);
//     setProducts(Product);
//   };

  return (
	<div>
	<h1>Admin</h1>
  <ProductManagment />
	<ProductList isAdmin={true}/>
	</div>
  );
}

export default Admin
