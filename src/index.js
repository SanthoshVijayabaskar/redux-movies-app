import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, browserHistory} from 'react-router';
import routes from './routes';
import './styles/styles.css';

//ES6 Const Keyword
const app = document.getElementById('app');

ReactDOM.render(
	<Router history={browserHistory} routes={routes} />,
	app
);