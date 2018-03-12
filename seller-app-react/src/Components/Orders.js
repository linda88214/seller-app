import React, { Component } from 'react';
import Nav from './Nav'

export default class Stocks extends Component {
	render(){
		return (
			<section id="orders-page-section">
    			<Nav user={this.props.user}/>
    			
			</section>
		)
	}
}