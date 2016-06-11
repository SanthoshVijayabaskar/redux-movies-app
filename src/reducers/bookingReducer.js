import * as types from '../actions/actionTypes';

//export default function bookingReducer(state, action)
export default function bookingReducer(state = [], action){
	switch(action.type){
		case types.BOOK_TICKETS:
			//state.push(action.ticket); - State Should not be mutable directly
			
			//Using ES6 Spread Operator - spread the array and copies using Object.assign
			return [...state,
				Object.assign({}, action.ticket)
			];

		default:
			return state;
	}
}