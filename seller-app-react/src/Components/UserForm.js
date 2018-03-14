import React, { Component } from 'react';

export default class UserForm extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      username: '',
      password: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
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
        <h1>WELCOME TO SELLERS APP</h1>
        <label><p className="label">Username:</p>
          <input type="text" name="username" onChange={this.handleChange} value={this.state.username} />
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