import React, { Component } from "react";

export default class Nav extends Component {
	render() {
		if(this.props.allUsers === null) {
			return "Loading";
		}
		else {
			console.log('Profile file: ', this.props.allUsers)
			const currentUser = this.props.allUsers.find(el => {
	    		return(
	    			// el.id == this.props.match.params.id
	    			el.id === parseInt(this.props.match.params.id, 10)
	    		)
	    	})

			return(
				<div>
				<nav id="main-nav">
					<div className="logo">SELLERS</div>
					<ul>
						<li>
							<a href={`/sellers/user/profile/${currentUser.id}`}>PROFILE</a>
						</li>
						<li className="dropdown">
							<p className="brop-button">STOCKS</p>
							<ul id="dropdown-menu" className="dropdown-content">
								<li><a href={`/sellers/user/${currentUser.id}/stocks/all`}>VIEW ALL</a></li>
								<li><a href={`/sellers/user/${currentUser.id}/stocks/new`}>CREATE NEW</a></li>
								<li><a href={`/sellers/user/${currentUser.id}/stocks/update`}>UPDATE</a></li>
							</ul>
						</li>
						<li>
							<a href={`/sellers/user/${currentUser.id}/orders`}>ORDERS</a>
						</li>				
						<li>
							<a href={`/sellers/user/${currentUser.id}/orderstatus`}>COMPLETE</a>
						</li>
					</ul>
				</nav>
				<div className="nav-page-heading">
	    			<h1>Welcome {currentUser.firstname} {currentUser.lastname}</h1>
				</div>
				</div>
			)
		}
	}
}