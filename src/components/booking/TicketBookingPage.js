import React, { Component } from 'react';

export default class TicketBookingPage extends Component{

	constructor(props, context){
		super(props,context);
		this.state = {
			ticket: { email: '' }
		};

		this.onEmailChange = this.onEmailChange.bind(this);
		this.onClickSave = this.onClickSave.bind(this);
		//Avoid calling .bind(this) in render due to performance issues
	}

	onEmailChange(event){
		const myTicket = this.state.ticket;
		myTicket.email = event.target.value;
		this.setState({ticket: myTicket});
	}

	onClickSave(){
		alert('Saved');
	}

	render(){

		return (
				<div>
					<h4>Ticket Booking</h4>
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
