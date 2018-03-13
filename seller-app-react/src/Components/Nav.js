import React, { Component } from "react";

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
		// 	if(!currentUser) {
		// 		return "Please Log In"
		// 	}
		// console.log("Inside Nav: ", this.props.currentUser)
			return(
				<div>
					<nav id="main-nav">
						<div className="logo">SELLERS</div>
						<ul>
							<li>
								<a href={`/sellers/user/profile/${this.props.currentUser.id}`}>PROFILE</a>
							</li>
							<li className="dropdown">
								<p className="brop-button">STOCKS</p>
								<ul id="dropdown-menu" className="dropdown-content">
									<li><a href={`/sellers/user/${this.props.currentUser.id}/stocks/all`}>VIEW ALL</a></li>
									<li><a href={`/sellers/user/${this.props.currentUser.id}/stocks/new`}>CREATE NEW</a></li>
									<li><a href={`/sellers/user/${this.props.currentUser.id}/stocks/update`}>UPDATE</a></li>
								</ul>
							</li>
							<li>
								<a href={`/sellers/user/${this.props.currentUser.id}/orders`}>ORDERS</a>
							</li>				
							<li>
								<a href={`/sellers/user/${this.props.currentUser.id}/orderstatus`}>COMPLETE</a>
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
