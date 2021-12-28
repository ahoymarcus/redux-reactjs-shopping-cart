import React, { useEffect } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';

import { setProducts } from '../redux/actions/productActions';
import ProductComponent from '../containers/ProductComponent';



const ProductList = () => {
	/*
		Atenção: acessando o estado da aplicação diretamente com o react-redux.....
	*/
	const products = useSelector((state) => state);
	//console.log(products);
	
	const dispatch = useDispatch();
	
		
	const fetchProducts = async () => {
		const response = await axios
			.get('http://fakestoreapi.com/products')
			.catch((err) => {
				console.log("Err", err);
			});
			
			console.log(response);
			
			// Dispatch dados para a Store
			dispatch(setProducts(response.data));
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



