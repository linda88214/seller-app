import React, { Component } from "react";

export default class Nav extends Component {
	constructor(props){
		super(props);

		this.state = {
			style: {display: 'none'}
		}
	}

	dropdown(){
		this.setState({
			style: {display: 'block'}
		})
	}

	render() {
		const currentUser = this.props.user
		return(
			<div>
			<nav id="main-nav">
				<div className="logo">SELLERS</div>
				<ul>
					<li>
						<a href="/sellers/user/:id/profile">PROFILE</a>
					</li>
					<li className="dropdown">
						<p className="brop-button" onClick={this.dropdown}>STOCKS</p>
						<div id="dropdown-menu" className="dropdown-content" style={this.state.style}>
							<a href="/sellers/user/:id/stocks/stocks">VIEW ALL</a>
							<a href="/sellers/user/:id/stocks/create">CREATE NEW</a>
							<a href="/sellers/user/:id/stocks/update">UPDATE</a>
						</div>
					</li>
					<li>
						<a href="/sellers/user/:id/orders">ORDERS</a>
					</li>				
					<li>
						<a href="/sellers/user/:id/orderstatus">COMPLETE</a>
					</li>
				</ul>
			</nav>
			<div className="profile-page-heading">
    			<h1>Welcome {currentUser.firstname} {currentUser.lastname}</h1>
			</div>
			</div>
		)
	}
}