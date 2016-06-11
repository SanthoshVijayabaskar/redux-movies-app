import React, { Component, PropTypes } from 'react';
import NavBar from './common/NavBar';

export default class HomePage extends Component{

	render(){
		const divStyle = {
			marginTop: '80px',
			marginLeft: '40px',
			marginRight: '40px'
		};

		return (
				<div>
				<NavBar menuItem1="Home" menuItem2="Movies" menuItem3="About" menuItem4="Tickets"/>
				<br></br>
					<div style={divStyle}>
						{this.props.children}
					</div>
				</div>
			);

	}

}

HomePage.propTypes = {
	children: PropTypes.object.isRequired
};