import React, { Component } from 'react';
import axios from 'axios'
import TokenService from "../services/TokenService"

export default class Stocks extends Component {
	constructor(props){
		super(props)

		this.state = {
			allStocks: []
		}
		this.allStocks = this.allStocks.bind(this)
		// this.update = this.update.bind(this)
	}

	allStocks(){
		axios({
			headers: {
		        'Content-type': 'application/json',
		        Authorization: `Bearer ${TokenService.read()}`,
      		},
			url: 'http://localhost:3000/stocks',
			method: 'GET'
		}).then(response => {
			// console.log('allStocks: ', response);
			this.setState({ allStocks: response.data });
		});
	}

	update(id){
		// console.log('td clicked', id)
		this.props.history.push(`/user/stocks/update/${id}`)
	}

	componentDidMount(){
		this.allStocks()
	}

	render(){

		const allStocks = this.state.allStocks.map((el, key) => {
			// console.log(el.id)
			return(
				<tr key={key} onClick={() => this.update(el.id)}>
					<td>{el.itemname}</td>
					<td>{el.itemnumber}</td>
					<td>{el.description}</td>
					<td>${el.price}.00</td>
					<td>{el.itemsleft}</td>
				</tr>
			)
		})

		return (
			<section id="stocks-page-section">
				<h1>ALL STOCKS</h1>
    			<div className="allstocks-table-div">
    				<table className="allstocks-table">
    					<thead>
    						<tr>
	    						<th>Item Name</th>
	    						<th>Item Number</th>
	    						<th>Description</th>
	    						<th>Price</th>
	    						<th>Stocks</th>
	    					</tr>
    					</thead>
    					<tbody>
    						{allStocks}
    					</tbody>
    				</table>
    			</div>
			</section>
		)
	}
}