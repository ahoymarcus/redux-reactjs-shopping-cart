import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';



const ProductComponent = () => {
	/*
		Atenção: acessando o estado da aplicação diretamente com o react-redux.....
	*/
	const products = useSelector((state) => state.allProducts.products);
	
	const renderList = products.map((product, index) => {
		const { id, title, image, price, category } = product;
		
		
		return (
			<article key={index} className="product-card">
				<Link to={`/product/${id}`} className="product-link" >
					<div className="product-image-container">
						<img className="product-image" src={image} alt={`product ${title}`} />
					</div>
					<div className="product-content">
						<div className="product-header">
							<h4>{product.title}</h4>
							<h4>${product.price}</h4>
							<p>{category}</p>
						</div>
					</div>
				</Link>
			</article>
		);
	});
	
	
	return (
		<div className="products-container">
			{renderList}
		</div>
	);
};



export default ProductComponent;



