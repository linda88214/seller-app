import React, { Component } from 'react';
import axios from 'axios';
import TokenService from "../services/TokenService"

export default class Stocks extends Component {
	constructor(props){
		super(props)

		this.state = {
			allOrders: []
		}
	}

  allOrders(){
    axios({
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${TokenService.read()}`,
      },
      url: 'http://localhost:3000/orders',
      method: 'GET'
    }).then(response => {
      this.setState({ allOrders: response.data});
    });
  }

  componentDidMount(){
    this.allOrders()
  }

	render(){

		if(this.state.allOrders === null ){
			return "loading"
		} else {

		// console.log("allOrders: ", this.props.allOrders)
		// console.log("allStocks: ", this.props.allStocks)
		const allOrders = this.state.allOrders.map((el, key) => {
			// console.log(el)
			return (
				<tr key={key}>
					<td>{el.itemname}</td>
					<td>{el.itemnumber}</td>
					<td>{el.qty}</td>
					<td>{el.total}</td>
					<td>Ellen</td>
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