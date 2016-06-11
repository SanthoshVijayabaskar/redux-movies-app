import {combineReducers} from 'redux';
import ticketBooking from './bookingReducers';

const rootReducer = combineReducers({
	ticketBooking //Short-hand property name in ES6
});

export default rootReducer;