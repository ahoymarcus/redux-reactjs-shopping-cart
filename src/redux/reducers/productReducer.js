import { ActionTypes } from '../constants/action-types';



const initialState = {
	products: [{
		id: 1,
		title: 'Dipesh',
		category: 'programmer'
	}],
};


export const productReducer = (state = initialState, {type, payload }) => {
	switch (type) {
		case ActionTypes.SET_PRODUCTS:
			return state;
		case SELECTED_PRODUCT:
		
			break;
		case REMOVE_SELECTED_PRODUCT:
		
			break;
		default:
			return state;
	}
};



