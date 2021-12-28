import React from 'react';
import { useSelector } from 'react-redux';



const ProductList = () => {
	const products = useSelector((state) => state);
	console.log(products);
	
	
	
	return (
		<section className="main-section">
			<h2>Product List</h2>
		</section>
	);
};



export default ProductList;



