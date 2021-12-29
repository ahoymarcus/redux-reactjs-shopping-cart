import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';

import { selectedProduct } from '../redux/actions/productActions';


const ProductDetail = () => {
	const { productId } = useParams();
	console.log(productId);
	
	const dispatch = useDispatch();
	
	const fetchProductDetails = async () => {
		const response = await axios
			.get(`https://fakestoreapi.com/products/${productId}`)
			.catch((err) => {
				console.log('Err', err);
			});
			
		dispatch(selectedProduct(response.data));
	};
	
	
	return (
		<div>
			<h2>Product Detail</h2>
		</div>
	);
};



export default ProductDetail;


