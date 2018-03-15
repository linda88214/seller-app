import React, { Component } from 'react';
import axios from 'axios';

export default class Stocks extends Component {
	constructor(props){
		super(props)

		this.state = {
			allOrders: [],
			qty: '',
			name: ''
		}
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
	}

	handleChange(e){
        const key = e.target.name;
        const value = e.target.value;
        this.setState({
            [key]: value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        axios('http://localhost:3000/orders', {
            method: "POST",
            data: this.state
        }).then(resp => {
            console.log("posted?")

            
        })
    }


	render(){

		return (
			<section id="neworders-page-section">
    			<div className="neworders-table-div">
    				<form onSubmit={this.handleSubmit} className="neworders-form">
	    				<table className="neworders-table">
	    					<thead>
	    						<tr>
		    						<th>Item Name</th>
		    						<th>QTY</th>
		    						<th>Customer Name</th>
		    					</tr>
	    					</thead>
	                        <tbody>
		                        <tr>
			    					<td><input type="text" name="itemname" onChange={this.handleChange} value={this.state.itemname} /></td>
			                        
			    					<td><input type="text" name="qty" onChange={this.handleChange} value={this.state.qty} /></td>
			                        
			    					<td><input type="text" name="name" onChange={this.handleChange} value={this.state.name} /></td>
		                        </tr>
	                        </tbody>
	                    </table>
    					<button type="submit" value="Submit" className="create-neworder-button">CREATE</button>
    				</form>
    			</div>
			</section>
		)
	
	}
}