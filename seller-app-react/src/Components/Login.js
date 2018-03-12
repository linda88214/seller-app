import React, { Component } from 'react';
import {BrowserRouter as Link} from 'react-router-dom';

export default class Login extends Component {
	constructor(props){
		super(props)

		this.state = {
			username: '',
			password: ''
		}
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	// update form state
	handleChange(el){
		const {name,value} = el.target
		this.setState({
			[name]: value
		})
	}

	handleSubmit(el){
		el.prevendDefault();
		this.props.submit(this.state);

	}

	render(){
		return(
			<main id="login-page">
				<a href="/sellers/signup" className="signup-link">Sign Up</a>
				<form onSubmit={this.handleSubmit}>
					<h1>WELCOME TO SELLERS APP</h1>
					<label><p className="label">Username:</p>
						<input type="text" name="username" 
							onChange={this.handleChange} value={this.state.username} />
          			</label>
     				<br />
			        <label><p className="label">Password:</p>
				        <input type="password" name="password" 
				            onChange={this.handleChange} value={this.state.password} />
			        </label> <br />
        			<Link to="/sellers/user/:id/profile"><button type="submit" value="Submit">Login</button></Link>
				</form>
			</main>
		)
	}
}