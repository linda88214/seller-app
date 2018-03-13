import React, { Component } from 'react';
import Nav from './Nav'

export default class Stocks extends Component {
	render(){
		return (
			<section id="newstock-page-section">
    			<Nav currentUser={this.props.user}/>
    			<form className="newstock-form">
    				<h1>Create New Item</h1>
    				<label>
    					<input />
    				</label>
    				<label>
    					<input />
    				</label>
    				<label>
    					<input />
    				</label>
    				<label>
    					<input />
    				</label>
    				<label>
    					<input />
    				</label>
    				<button>CREATE</button>
    			</form>
			</section>
		)
	}
}