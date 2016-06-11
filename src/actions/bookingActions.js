import * as types from './actionTypes';
import BookingApi from '../api/BookingApi';

export function loadTicketsSuccess(tickets){
	return {type: types.LOAD_TICKETS_SUCCESS, tickets}
}

export function loadMyTickets(){
	return function(dispatch){

		//Use fetch call or AJAX Call here... We are using a mock API using Promise
		return BookingApi.getAllTickets().then(tickets => {
			dispatch(loadTicketsSuccess(tickets));
		}).catch(error=> {
			throw(error);
		});
	}
}