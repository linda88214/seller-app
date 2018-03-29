import React, { Component } from 'react';
// import moment from 'moment';

 
export default class MyApp extends Component {
  state = {
    date: new Date(),
  }
 
  onChange = date => this.setState({ date })
 
  render() {
    return (
      <div>
        <div className="comingsoon-div">
          <h1>COMING SOON</h1>
        </div>
      </div>
    );
  }
}