import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';

import { selectedProduct } from '../redux/actions/productActions';


const ProductDetail = () => {
	const product = useSelector((state) => state.product);
	const { image, title, price, category, description } = product;
	
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
		<div className="product-detail-container">
      {Object.keys(product).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <div className="product-detail-tab"> 
					<div className="product-detail-image-container">
						<img className="product-detail-image" src={image} />
					</div>
					<div className="product-detail-content">
						<h3>{title}</h3>
						<h3 className="product-detail-price">
							<a >${price}</a>
						</h3>
						<h4 className="product-detail-category ">{category}</h4>
						<p className="product-detail-description">{description}</p>
						
						<div className="btn-container" tabIndex="0">
							<div className="hidden content">
								<i className="shop icon"></i>
							</div>
							<div className="add-btn">Add to Cart</div>
						</div>
					</div>
        </div>
      )}
    </div>
	);
};



export default ProductDetail;


