import React, { Component } from 'react';
import axios from 'axios';

export default class Stocks extends Component {
	constructor(props){
		super(props)

		this.state = {
			allOrders: []
		}
		this.allOrders = this.allOrders.bind(this)
	}

	allOrders(){
		axios({
			url: 'http://localhost:3000/orders',
			method: 'get'
		}).then(response => {
			console.log('allOrders: ', response);
			this.setState({ allOrders: response.data });
		});
	}

	componentDidMount(){
		this.allOrders();
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