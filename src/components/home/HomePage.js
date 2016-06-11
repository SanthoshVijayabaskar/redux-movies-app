import React, { Component } from 'react';

export default class HomePage extends Component{

	render(){

		var divStyle = {
			marginLeft: '80px'
		}

		return (
				<div className="jumbotron">
						<div style={divStyle}>
							<h1>Welcome to React Cinemas</h1>
					   		<h4>Free Unlimited Tickets... </h4>
						</div>
				</div>
			);

	}

}