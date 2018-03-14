import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SignupForm from './SignupForm';

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(data) {
    this.props.submit(data);
  }

  render() {
    return (
      <div id="signup-page">
        <Link to="/user/login" className="login-link"> LOGIN </Link>
        <SignupForm submit={this.onSubmit} />
      </div>
    )
  }
}








