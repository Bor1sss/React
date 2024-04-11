import React, { Component } from 'react';
import { productList } from '../Products';
import Shop from './Shop';
class Receipt extends Component {
   
    render() { 
        const productsList = productList.map((product) => (
            <Shop product={product} />
        ));
        const totalBillPrice = productList.reduce((acc, product) => acc + product.price * product.quantity, 0);


        return (
            <div>
			<h1 >Сумма чека: {totalBillPrice} грн.</h1>
			<div >{productsList}</div>
		</div>
        );
    }
}

export default Receipt;
