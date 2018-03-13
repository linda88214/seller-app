import React, { Component } from 'react';
import axios from 'axios';
import Nav from './Nav';

export default class Profile extends Component {
	constructor(props) {
		super(props);

		this.state = {
			username: '',
			firstname: '',
			lastname: '',
			email: '',
			password: '',
			currentUserId: null
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.deleteProfile = this.deleteProfile.bind(this);
	}

	handleChange(event) {
		const key = event.target.name;
		const value = event.target.value;
		this.setState({
			[key]: value
		});
	}

	handleSubmit(el) {
		el.preventDefault();
		axios({
			url: `http://localhost:3000/sellers/${this.props.match.params.id}`,
			method: 'PUT',
			data: this.state
		}).then(response => {
			console.log('handleSubmit: ', response.data);
			this.setState(this.props.history.push(`/sellers/user/profile/${this.props.match.params.id}`))
		})
			.catch(err => {
			console.log('err: ', err.response)
		})
	}

	deleteProfile(el){
		el.preventDefault();
		console.log("Delete button clicked")
		axios({
			url: `http://localhost:3000/sellers/${this.props.match.params.id}`,
			method: 'DELETE'
		}).then(response => {
			console.log('Profile Deleted', response.data)

			this.setState(this.props.history.push('/sellers/login'))
		}).catch(err => {
			console.log('error: ', err.response)
		})
	}

	render(){
		if(this.props.allUsers === null) {
			return "Loading";
		}
		else {
			// console.log('Profile file: ', this.props.allUsers)
			const currentUser = this.props.allUsers.find(el => {
				// console.log(el.id)
	    		return(
	    			// converting string id to integer 
	    			el.id === parseInt(this.props.match.params.id, 10)
	    		)
	    	})
	    	if(!currentUser){
	    		return "Please Log In"
	    	}
	    	return(
		    	<section id="profile-page-section">
	    			<Nav currentUser={this.props.user} />
	    			<div className="delete-profile">
	    				<button onClick={this.deleteProfile}>&#10005;</button>
	    				<span className="delete-text">DELETE</span>
	    			</div>
	    			<form onSubmit={this.handleSubmit}>
						<label htmlFor="username">
							<p>Username:</p>
							<input type="text" name="username" onChange={this.handleChange} placeholder={currentUser.username} value={this.state.username}/>
						</label>
						<br />
						<label htmlFor="firstname">
							<p>First Name:</p>
							<input type="text" name="firstname" onChange={this.handleChange} placeholder={currentUser.firstname} value={this.state.firstname} />
						</label>
						<br />
						<label htmlFor="lastname">
							<p>Last Name:</p>
							<input type="text" name="lastname" onChange={this.handleChange} placeholder={currentUser.lastname} value={this.state.lastname} />
						</label>
						<br />
						<label htmlFor="email">
							<p>Email:</p>
							<input type="text" name="email" onChange={this.handleChange} placeholder={currentUser.email} value={this.state.email} />
						</label>
						<br />
						<label htmlFor="password">
							<p>Password:</p>
							<input type="password" name="password" onChange={this.handleChange} placeholder={currentUser.password} value={this.state.password} />
						</label>
						<br />
						<button type="submit" value="submit">Update</button>
				    </form>
				</section> 
			)
		}
	}
}

