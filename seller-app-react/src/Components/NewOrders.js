import React, { Component } from 'react';
import axios from 'axios';

export default class Stocks extends Component {
	constructor(props){
		super(props)

		this.state = {
			allOrders: []
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
        axios('http://localhost:3000/stocks', {
            method: "POST",
            data: this.state
        }).then(resp => {
            console.log("posted?")
            
        })
    }

	render(){

		const allOrders = this.state.allOrders.map((el, key) => {
			console.log(el)
			return(
				<tr key={key}>
					<td>{el.qty}</td>
					<td>${el.price}.00</td>
					<td>{el.total}</td>
					<td>{el.orderstatus_id}</td>
				</tr>
			)
		})

		return (
			<section id="orders-page-section">
    			<div className="allorders-table-div">
    				<table className="allorders-table">
    					<thead>
    						<tr>
	    						<th>QTY</th>
	    						<th>Price</th>
	    						<th>TOTAL</th>
	    						<th>Status ID</th>
	    					</tr>
    					</thead>
    					<tbody>
    						{allOrders}
    					</tbody>
    				</table>
    				
    			</div>
			</section>
		)
	
	}
}