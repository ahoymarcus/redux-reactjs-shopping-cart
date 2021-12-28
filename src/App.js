// https://www.youtube.com/watch?v=0W6i5LYKCSI
//  0hs  28'  30''
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// styles
import './App.css'; 

// components
import Header from './containers/Header';
import ProductList from './containers/ProductList';
import ProductDetail from './containers/ProductDetail';
import Error from './components/Error';


 

function App() {
	 
	

 
  return (
    <div className="app">
			<Header />
			<Router>
				
				<Routes>
					<Route path="/" element={<ProductList />} />
					<Route path="/product/:productId" element={<ProductDetail />} />
					<Route path="*" element={<Error />} />
				</Routes>
			</Router>
		</div>
  );
}



export default App;



