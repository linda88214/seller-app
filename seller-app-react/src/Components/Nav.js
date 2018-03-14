import React, { Component } from "react";
import { Link } from 'react-router-dom';

export default class Nav extends Component {
	render() {

		// if(this.props.allUsers === null){
		// 	return "Loading";
		// }
		// else {
		// 	console.log("Inside Nav:", this.props.allUsers)
		// 	const currentUser = this.props.allUsers.find(el => {
		// 		return(
		// 			el.id = parseInt(this.props.match.params.id, 10)
		// 		)
		// 	})
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
									<li><Link to={`/user/${this.props.currentUser.id}/stocks/new`}>CREATE NEW</Link></li>
									<li><Link to={`/user/${this.props.currentUser.id}/stocks/update`}>UPDATE</Link></li>
								</ul>
							</li>
							<li>
								<Link to={`/user/${this.props.currentUser.id}/orders`}>ORDERS</Link>
							</li>				
							<li>
								<Link to={`/user/${this.props.currentUser.id}/orderstatus`}>COMPLETE</Link>
							</li>
						</ul>
					</nav>
					<div className="nav-page-heading">
		    			<h1>Welcome {this.props.currentUser.firstname} {this.props.currentUser.lastname}</h1>
					</div>
				</div>
			)
		// }
	}
}
