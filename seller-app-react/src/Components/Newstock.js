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
    					<p>Item Name</p>
    					<input />
    				</label>
    				<label>
    					<p>Item Number</p>
    					<input />
    				</label>
    				<label>
    					<p>Description</p>
    					<input />
    				</label>
    				<label>
    					<p>Price</p>
    					<input />
    				</label>
    				<label>
    					<p>Stock</p>
    					<input />
    				</label>
    				<button>CREATE</button>
    			</form>
			</section>
		)
	}
}