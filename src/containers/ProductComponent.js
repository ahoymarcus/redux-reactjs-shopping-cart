import React from 'react';

import { useSelector } from 'react-redux';



const ProductComponent = () => {
	/*
		Atenção: acessando o estado da aplicação diretamente com o react-redux.....
	*/
	const products = useSelector((state) => state.allProducts.products);
	console.log(products);
	
	//const { id, title } = products[0];
	
	
	return (
		<div className="product-container">
			<article className="product-card">
				<img className="product-image" />
				<div className="product-content">
					<div className="product-header">
						<h3></h3>
					</div>
				</div>
			</article>
		</div>
	);
};



export default ProductComponent;



