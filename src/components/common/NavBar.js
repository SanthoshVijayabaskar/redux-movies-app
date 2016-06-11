import React, { Component } from 'react';
import {Link, IndexLink } from 'react-router';

export default class NavBar extends Component{

	render(){

		return(
				<div>

					<nav className="navbar navbar-default navbar-fixed-top">
					  <div className="container-fluid">
						    <div className="navbar-header">
						      <a className="navbar-brand" href="#">
						        <img alt="Brand" src="http://jsrocks.org/images/icon-logo-js.png"></img>
						      </a>
						    </div>
					   
						   <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
	      						<ul className="nav navbar-nav">
	      							<IndexLink to="/" activeClassName="active">{this.props.menuItem1} </IndexLink>
	      							{ " | "}
						           <Link to="/movies" activeClassName="active">{this.props.menuItem2}  </Link>
						           	{ " | "}
								   <Link to="/about" activeClassName="active">{this.props.menuItem3}</Link>
        						</ul>
						   </div>
					  </div>
					</nav>
			        
		        </div>
    		);
	}

}
