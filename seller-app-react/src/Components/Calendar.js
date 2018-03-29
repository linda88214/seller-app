import React, { Component } from 'react';
import Calendar from 'rc-calendar';

 
export default class MyApp extends Component {
  state = {
    date: new Date(),
  }
 
  onChange = date => this.setState({ date })
 
  render() {
    return (
      <div className="calendar">
        <Calendar />
      </div>
    );
  }
}