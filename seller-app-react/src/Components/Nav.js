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
					<nav id="main-nav">
						<div className="logo">SELLERS</div>
						<ul>
							<li>
								<Link to={`/user/profile/${this.props.currentUser.id}`}>PROFILE</Link>
							</li>
							<li className="dropdown">
								<p className="brop-button">STOCKS</p>
								<ul id="dropdown-menu" className="dropdown-content">
									<li><Link to={`/user/${this.props.currentUser.id}/stocks/all`}>VIEW ALL</Link></li>
									<li><Link to={`/user/${this.props.currentUser.id}/stocks/update`}>UPDATE</Link></li>
								</ul>
							</li>
							<li>
								<Link to={`/user/${this.props.currentUser.id}/orders`}>ORDERS</Link>
							</li>				
							<li>
								<Link to={`/user/${this.props.currentUser.id}/orderstatus`}>COMPLETE</Link>
							</li>
							<li>
								<Link to={`/user/${this.props.currentUser.id}/buyers`}>CUSTOMERS</Link>
							</li>
						</ul>
					</nav>
					<div className="nav-page-heading">
		    			<h1>Welcome {this.props.currentUser.firstname} {this.props.currentUser.lastname}</h1>
		    			<button className="log-out-button" onClick={this.props.logout}><Link to="/">Logout</Link></button>
					</div>
					<div className="nav-page-footer">
						<Footer />
					</div>
				</div>
			)
		// }
	}
}
