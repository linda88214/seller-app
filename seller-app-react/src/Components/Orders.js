import React, { Component } from 'react';
// import axios from 'axios';

export default class Stocks extends Component {
	constructor(props){
		super(props)

		this.state = {
			allOrders: []
		}
	}



	render(){

		if(this.props.allOrders === null ){
			return "loading"
		} else {

		// console.log("allOrders: ", this.props.allOrders)
		// console.log("allStocks: ", this.props.allStocks)
		const allOrders = this.props.allOrders.map((el, key) => {
			// console.log(el)
			return (
				<tr key={key}>
					<td>{el.itemname}</td>
					<td>{el.itemnumber}</td>
					<td>{el.description}</td>
					<td>{el.qty}</td>
					<td>{el.total}</td>
					<td>{el.buyer}</td>
				</tr>
			)
		}) 

		return (
			<section id="orders-page-section">
				<h1>NEW ORDERS</h1>
    			<div className="allorders-table-div">
    				<table className="allorders-table">
    					<thead>
    						<tr>
	    						<th>Item Name</th>
	    						<th>Item Number</th>
	    						<th>Description</th>
	    						<th>QTY</th>
	    						<th>Total</th>
	    						<th>Customer Name</th>
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
}