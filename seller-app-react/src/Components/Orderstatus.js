import React, { Component } from 'react';
import Nav from './Nav'

export default class Stocks extends Component {
	render(){
		return (
			<section id="orderstatus-page-section">
    			<Nav currentUser={this.props.user}/>
    			
			</section>
		)
	}
}