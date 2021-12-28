import React from 'react';
import { useSelector } from 'react-redux';

import ProductComponent from './ProductComponent';



const ProductList = () => {
	/*
		Atenção: acessando o estado da aplicação diretamente com o react-redux.....
	*/
	const products = useSelector((state) => state);
	console.log(products);
		
	
	
	return (
		<section className="main-section">
			<div className="products-list-container">
				<ProductComponent />
			</div>
		</section>
	);
};



export default ProductList;



