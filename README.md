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

Abaixo temos o sistema de pastas para os componentes do Redux:

<br />

```
./src
	./redux
		./actions
			productActions.js
		./constants
		./reducers
		store.js
```

<br />

Agora, cariando um módulo com constantes para definir os tipos de actions aceitas. No caso temos 03:

<br />

```
export const ActionTypes = {
	SET_PRODUCTS = 'SET_PRODUCTS',
	SELECTED_PRODUCT: 'SELECTED_PRODUCT',
	REMOVE_SELECTED_PRODUCT: 'REMOVE_SELECTED_PRODUCT'
}; 
```

<br />

Aqui, a definição das actions para este app:

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


