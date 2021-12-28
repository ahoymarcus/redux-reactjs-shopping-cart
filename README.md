# Redux-ReactJS Shopping Cart App

<br />

O .:[^1]

<br />



Finalmente, o app Cart pode ainda fazer requisições HTTP para receber dados de APIs da web.

<br />

#### React Project (the 15 Projects) - Freecodecamp.org

Conjunto de projetos de frontend inspirados na apresentação do professor **Johm Smilga** para aprofundar no conhecimento do framework React-JS e JavaScript. [^1]

<br />

[]()

<br />

### Esquema representando o Ciclo de Vida do Redux:

![Esquema representando o Ciclo de Vida do Redux](/public/images/the-redux-life-cycle.png)

<br />

### Aqui podemos ver o sistema de pastas para os componentes do Redux:

![Abaixo temos o sistema de pastas para os componentes do Redux](/public/images/estrutura-de-pastas-para-os-componentes-do-redux.png)


<br />

Agora, criando um módulo com constantes para definir os tipos de actions aceitas. No caso temos 03:

<br />

```
export const ActionTypes = {
	SET_PRODUCTS = 'SET_PRODUCTS',
	SELECTED_PRODUCT: 'SELECTED_PRODUCT',
	REMOVE_SELECTED_PRODUCT: 'REMOVE_SELECTED_PRODUCT'
}; 
```

<br />

E definindo as actions para este app:

- Set Products: renderiza produtos 
- Selected Products: produto selecionado pelo usuário
- Remove Selected Product: para retirar do carrinho produtos discartados


<br />

```
import { ActionTypes } from '../constants/action-types';

export const setProducts = (products) => {
	return  {
		type: ActionTypes.SET_PRODUCTS,
		payload: products,
	};
};

export const selectedProduct = (product) => {
	return {
		type: ActionTypes.SELECTED_PRODUCT,
		payload: product,
	};
};
```

<br />

Definindo um reducer individualmente:

```
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
```

<br />

Agora, combinando todos as possíveis unidades de reducers existentes na aplicação em um objeto Redux do tipo combinedReducers:

<br />

```
import { combineReducers } from 'redux';

// reducers items
import { productReducer } from './productReducer';


const reducers = combineReducers({
	allProducts: productReducer
});
```

<br />

Finalmente, trazendo os reducers combinados para a criação da Store:

<br />

```
import { createStore } from 'redux';

// combined reducers
import reducers from './reducers/index';

// combined reducers + state
const store = createStore(reducers, {});

export default store;
```


<br />

### I:

![Imagem do app Cart mostrando o carrinho de compra esvaziado dos itens](/public/images/)






<br />

### I:

![Imagem do app Cart mostrando o carrinho de compra esvaziado dos itens](/public/images/)



<br />

```

```

<br />

Já :

<br />

```

```

<br />
<br />

[^1]  Dipesh Malvia - Youtube Channel


