import React, { Component } from 'react';

export default class Stocks extends Component {
	render(){
		return (
			<section id="newstock-page-section">
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