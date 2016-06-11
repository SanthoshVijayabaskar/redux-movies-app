import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as bookingActions from '../../actions/bookingActions';
import {bindActionCreators} from 'redux';
import BookingList from './BookingList';

class TicketBookingPage extends Component{

	constructor(props, context){
		super(props,context);
	}

	ticketRow(ticket, index){
		return <div key={index}>{ticket.email}</div>;
	}

	render(){
		const {tickets} = this.props;
		return (
				<div>
					<h4>My Bookings</h4>
						<BookingList tickets={tickets}/>
				</div>
			);

	}

}

//Props injected by the Components
function mapStateToProps(state, ownProps){
	return{
		tickets: state.tickets //This is what we mentioned in rootReducer
	};
}

function mapDispatchToProps(dispatch){
	return{

		//method 1: no mapDispatchToProps passed in connect
		
		//method 2: Arrow Functions with 'ticket' as param of anonymous function
		//bookTickets is an action passed as Props to the Component
		//bookTickets: ticket => dispatch(bookingActions.bookTickets(ticket))
		
		//method 3: Using bindActionCreators
		actions: bindActionCreators(bookingActions, dispatch)
	};
}

//Connect Method returns a function which takes an argument of TicketBookingPage
//If we omit second param in connect, we can directly access the Dispatch
export default connect(mapStateToProps,mapDispatchToProps)(TicketBookingPage);
