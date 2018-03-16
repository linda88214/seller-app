import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import SignupForm from './SignupForm';

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(data) {
    console.log('submit clicked')
    this.props.submit(data);
  }

  render() {
    const redirect = this.props.redirect;
    // console.log(redirect)
    if(redirect){
          return <Redirect to={'/user/login'}/>;
      }

    return (
      <div id="signup-page">
        <Link to="/user/login" className="login-link"> LOGIN </Link>
        <SignupForm submit={this.onSubmit} />
      </div>
    )
  }
}








