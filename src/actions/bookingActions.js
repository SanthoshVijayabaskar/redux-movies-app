import * as types from './actionTypes';

export function bookTickets(ticket){
	return {type: types.BOOK_TICKETS, ticket: ticket}
}