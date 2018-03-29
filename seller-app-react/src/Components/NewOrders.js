import React, { Component } from 'react';
import axios from 'axios';
import TokenService from "../services/TokenService"

export default class Stocks extends Component {
	constructor(props){
		super(props)

		this.state = {
			allOrders: [],
			qty: '',
			name: '',
			itemname: '',
			itemnumber: '',
			description: '',
			total: '',
			buyer_id: '',
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
        axios({
        	headers: {
		        'Content-type': 'application/json',
		        Authorization: `Bearer ${TokenService.read()}`,
      		},
      		url: 'http://localhost:3000/orders', 
            method: "POST",
            data: this.state
        }).then(resp => {
            console.log("posted", resp.data)
        }).catch(err => {
        	console.log("err: ", err)
        })
    }


	render(){
		return (
			<section id="neworders-page-section">
    			<div className="neworders-table-div">
    				<form onSubmit={this.handleSubmit} className="neworders-form">
	    				<table className="neworders-table">
	                        <tbody>
		                        <tr>
			    					<td><input type="text" name="itemname" onChange={this.handleChange} value={this.state.itemname} placeholder="Item Name"/></td>
			        				<td><input type="text" name="itemnumber" onChange={this.handleChange} value={this.state.itemnumber} placeholder="Item Number" /></td>
			    					<td><input type="text" name="qty" onChange={this.handleChange} value={this.state.qty} placeholder="QTY"/></td>
			    					<td><input type="text" name="total" onChange={this.handleChange} value={this.state.total} placeholder="Total" /></td>
			    					<td><input type="text" name="name" onChange={this.handleChange} value={this.state.name} placeholder="Customer Name"/></td>
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
// }