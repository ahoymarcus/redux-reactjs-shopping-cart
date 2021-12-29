import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';

import { selectedProduct } from '../redux/actions/productActions';


const ProductDetail = () => {
	const product = useSelector((state) => state.product);
	
	const { productId } = useParams();
	console.log('productId = ', productId);
	
	console.log(product);
	
	const dispatch = useDispatch();
	
	const fetchProductDetails = async () => {
		const response = await axios
			.get(`https://fakestoreapi.com/products/${productId}`)
			.catch((err) => {
				console.log('Err', err);
			});
			
		dispatch(selectedProduct(response.data));
	};
	
	
	useEffect(() => {
		if (productId && productId !== '') fetchProductDetails();
	}, [productId]);
	
	
	return (
		<div>
			<h2>Product Detail</h2>
		</div>
	);
};



export default ProductDetail;


