import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import UserForm from './UserForm';

export default class Login extends Component {
	constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(data) {
    console.log(`handling submit: ${data}`);
    this.props.submit(data);
  }

	render() {
		const redirect = this.props.redirect;

		if(redirect){
      		return <Redirect to={`/user/profile/${this.props.id}`}/>;
    	}

    return (
      <main id="login-page">
      	<Link to="/user/signup" className="signup-link"> SIGN UP </Link>
        <UserForm submit={this.onSubmit} />
      </main>
    )
  }
}