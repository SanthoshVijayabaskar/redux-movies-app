import {createStore , applyMiddleware} from 'redux';
import rootReducer from '../reducers';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk'; // Used to do async calls in Redux

export default function configureStore(initialState){ // Initialize the store with a state

	return createStore(
			rootReducer,
			initialState,
			applyMiddleware(thunk, reduxImmutableStateInvariant()) // Middleware for the store
			// Thunk is used to handle async calls in redux
			//We can use middleware to logging - refer redux docs
		);
}