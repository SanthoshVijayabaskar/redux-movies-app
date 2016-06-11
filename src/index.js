import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/configureStore'
import {Provider} from 'react-redux';

import {Router, browserHistory} from 'react-router';
import routes from './routes';
import './styles/styles.css';

//ES6 Const Keyword
const app = document.getElementById('app');
const store = configureStore(); //You can also pass Initial State from backend here...

ReactDOM.render(
	//Since we wrap the Provider at the Route Level, 
	//...we can access the store in all components

	<Provider store={store}>
		<Router history={browserHistory} routes={routes} />
	</Provider>
	,app
);