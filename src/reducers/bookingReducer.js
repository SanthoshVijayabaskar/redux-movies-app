import * as types from '../actions/actionTypes';

//export default function bookingReducer(state, action)
export default function bookingReducer(state = [], action){
	switch(action.type){
		case types.LOAD_TICKETS_SUCCESS:
			return action.tickets;

		default:
			return state;
	}
}