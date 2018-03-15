import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
export default class UserForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      firstname: '',
      lastname: '',
      email: '',
      password: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log('clicked from SignupForm Page')
    this.props.submit(this.state);
  }

  handleChange(e) {
    const { name, value } = e.target
    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>SIGN UP</h1>
        <label><p className="label">Username:</p>
          <input type="text" name="username" onChange={this.handleChange} value={this.state.username} />
        </label>
        <br />
        <label><p className="label">First Name:</p>
          <input type="text" name="firstname" onChange={this.handleChange} value={this.state.firstname} />
        </label>
        <br />
        <label><p className="label">Last Name:</p>
          <input type="text" name="lastname" onChange={this.handleChange} value={this.state.lastname} />
        </label>
        <br />
        <label><p className="label">Email:</p>
          <input type="text" name="email" onChange={this.handleChange} value={this.state.email} />
        </label>
        <br />
        <label><p className="label">Password:</p>
          <input type="password" name="password" onChange={this.handleChange} value={this.state.password} />
        </label>
        <br />
        <button type="submit" value="Submit">Submit</button>
      </form>
    );
  }
}