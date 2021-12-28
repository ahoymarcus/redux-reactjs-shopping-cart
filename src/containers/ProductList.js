import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';

import ProductComponent from './ProductComponent';



const ProductList = () => {
	/*
		Atenção: acessando o estado da aplicação diretamente com o react-redux.....
	*/
	const products = useSelector((state) => state);
	//console.log(products);
		
	const fetchProducts = async () => {
		const response = await axios
			.get('http://fakestoreapi.com/products')
			.catch((err) => {
				console.log("Err", err);
			});
			
			console.log(response);
	};
	
	
	useEffect(() => {
		fetchProducts();
	}, []);
	
	
	return (
		<section className="main-section">
			<div className="products-list-container">
				<ProductComponent />
			</div>
		</section>
	);
};



export default ProductList;



