// https://www.youtube.com/watch?v=0W6i5LYKCSI
//  0hs  47' 50''
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
  
// styles
import './App.css'; 
  
// pages
import ProductList from './pages/ProductList';
import ProductDetail from './pages/ProductDetail';
import Error from './pages/Error';

// components
import Header from './containers/Header';
 

function App() {
	 
	

 
  return (
    <div className="app">
			
			<Router>
				<Header />
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



