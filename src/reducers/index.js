import {combineReducers} from 'redux';
import tickets from './bookingReducer';

const rootReducer = combineReducers({
	tickets //Short-hand property name in ES6
});

export default rootReducer;