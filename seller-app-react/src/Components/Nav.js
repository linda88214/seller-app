import React, { Component } from "react";
import { Link } from 'react-router-dom';

import Footer from './Footer'

export default class Nav extends Component {

	render() {
			if(!this.props.currentUser) {
				return "Please Log In"
			}
		// console.log("Inside Nav: ", this.props.currentUser)

			return(
				<div>
					<div className="nav-page-heading">
		    			<h1>Welcome {this.props.currentUser.firstname} {this.props.currentUser.lastname}</h1>
		    			<button className="log-out-button" onClick={this.props.logout}><Link to="/">Logout</Link></button>
					</div>				
					<nav id="main-nav">
						<div className="logo">SELLERS</div>
						<ul>
							<li>
								<Link to={`/user/profile/${this.props.currentUser.id}`}>PROFILE</Link>
							</li>
							<li className="dropdown">
								<Link to={`/user/stocks/all`}>STOCKS</Link>
								
							</li>
							<li>
								<Link to={`/user/orders`}>ORDERS</Link>
							</li>				
							<li>
								<Link to={`/user/buyers`}>CUSTOMERS</Link>
							</li>
							<li>
								<Link to={'/user/calendar'}>CALENDAR</Link>
							</li>
							
						</ul>
					</nav>
					<div className="nav-page-footer">
						<Footer />
					</div>
				</div>
			)
		// }
	}
}


// 
// 							<li>
// 								<Link to={`/user/orderstatus`}>STATUS</Link>
// 							</li>


							// <li>
							// 	<Link to={'/user/tasks'}>TASKS</Link>
							// </li>