import { combineReducers } from 'redux';

// reducers items
import { productReducer } from './productReducer';



const reducers = combineReducers({
	allProducts: productReducer
});



export default reducers;


