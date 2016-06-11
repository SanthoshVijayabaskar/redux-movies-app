import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as bookingActions from '../../actions/bookingActions';
import {bindActionCreators} from 'redux';

class TicketBookingPage extends Component{

	constructor(props, context){
		super(props,context);
		//Initialize the State
		this.state = {
			ticket: { email: '' }
		};

		this.onEmailChange = this.onEmailChange.bind(this);
		this.onClickSave = this.onClickSave.bind(this);
		this.ticketRow = this.ticketRow.bind(this);
		//Avoid calling .bind(this) in render due to performance issues
	}

	onEmailChange(event){
		const myTicket = this.state.ticket;
		myTicket.email = event.target.value;
		this.setState({ticket: myTicket});
	}

	onClickSave(){
		//method 1: The below way is done when mapDispatchToProps is not passed to connect
		//this.props.dispatch(bookingActions.bookTickets(this.state.ticket));
		
		//method 2: The below was is done when mapDispatchToProps is passed to connect
		//this.props.bookTickets(this.state.ticket);

		//method 3: When Using bindActionCreators, mapping the dispatched props
		this.props.actions.bookTickets(this.state.ticket);
	}

	ticketRow(ticket, index){
		return <div key={index}>{ticket.email}</div>;
	}

	render(){
		return (
				<div>
					<h4>Ticket Booking</h4>
						{this.props.ticket.map(this.ticketRow)}
					<h5>EMail</h5>
					<input
						type="text"
						onChange={this.onEmailChange}
						value={this.state.ticket.email}/>
					
					<input
						type="submit"
						value="Book Ticket"
						onClick={this.onClickSave}/>
				</div>
			);

	}

}

//Props injected by the Components
function mapStateToProps(state, ownProps){
	return{
		ticket: state.ticket //This is what we mentioned in rootReducer
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
