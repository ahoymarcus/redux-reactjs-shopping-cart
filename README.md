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

Agora, criando um módulo com constantes para definir os tipos de actions aceitas para o reducer de produtos. No caso temos 03:

<br />

```
export const ActionTypes = {
	SET_PRODUCTS: 'SET_PRODUCTS',
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

Definindo um reducer individualmente, no caso o reducer para produtos:

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
		default:
			return state;
	}
};
```

<br />

Agora, reunindo todas as possíveis unidades de reducers existentes na aplicação em um objeto Redux do tipo combinedReducers:

<br />

```
import { combineReducers } from 'redux';

// reducers items
import { productReducer } from './productReducer';


const reducers = combineReducers({
	allProducts: productReducer
});

export default reducers;
```

<br />

A seguir é preciso trazer os reducers combinados para a criação da Store:

<br />

```
import { createStore } from 'redux';

// combined reducers
import reducers from './reducers/index';

// combined reducers + state
const store = createStore(reducers, {
	...state
});

export default store;
```

<br />

Finalmente, é preciso ligar o Redux à aplicação do React-JS, sendo que isto é feito com o uso de o componente Provider da biblioteca 'react-redux', que vai envelopar o componente principal App.js da aplicação e vai passar a Store criada como props:


<br />

```
...outras importações...

import { Provider } from 'react-redux';

import store from './redux/store';


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store} >
			<App />
		</Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

...outros scripts...
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


