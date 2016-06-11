import {createStore , applyMiddleware} from 'redux';
import rootReducer from '../reducers';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';

export default function configureStore(initialState){ // Initialize the store with a state

	return createStore(
			rootReducer,
			initialState,
			applyMiddleware(reduxImmutableStateInvariant()) // Middleware for the store
		);
}