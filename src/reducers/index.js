import {combineReducers} from 'redux';
import ticket from './bookingReducer';

const rootReducer = combineReducers({
	ticket //Short-hand property name in ES6
});

export default rootReducer;