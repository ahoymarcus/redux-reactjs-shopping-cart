import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';

import { setProducts } from '../redux/actions/productActions';

// components
import ProductComponent from '../containers/ProductComponent';
import Loading from '../components/Loading';



const ProductList = () => {
	/*
		Atenção: acessando o estado da aplicação diretamente com o react-redux.....
	*/
	const products = useSelector((state) => state.allProducts.products);
	const dispatch = useDispatch();
	console.log(products.length);
	
	
	const renderComponents = () => {
		if (Object.keys(products).length === 0) {
			return <Loading />
		} 
		else {
			return <ProductComponent />;
		}
	};

	
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
	
	
	// useEffect(() => {
		// renderComponents();
	// }, [products]);
	
	
	return (
		<section className="main-section">
			<div className="products-list-container">		
				{renderComponents()}
			</div>
		</section>
	);
};



export default ProductList;



