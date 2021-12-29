import React from 'react';
import { useSelector } from 'react-redux';



const ProductComponent = () => {
	/*
		Atenção: acessando o estado da aplicação diretamente com o react-redux.....
	*/
	const products = useSelector((state) => state.allProducts.products);
	
	const renderList = products.map((product, index) => {
		const { id, title, image, price, category } = product;
		
		return (
			<article key={index} className="product-card">
				<img className="product-image" />
				<div className="product-content">
					<div className="product-header">
						<h3>{product.title}</h3>
						<p>${product.price}</p>
					</div>
				</div>
			</article>
		);
	});
	
	
	return (
		<div className="product-container">
			{renderList}
		</div>
	);
};



export default ProductComponent;



