import React, { Component } from 'react';
import axios from 'axios'
import Nav from './Nav'

export default class Stocks extends Component {
	constructor(props){
		super(props)

		this.state = {
			allStocks: [],
			itemname: '',
			itemnumber: '',
			description: '',
			price: null,
			stock: null
		}
		this.allStocks = this.allStocks.bind(this)
		// this.handleChange = this.handleChange.bind(this)
		// this.handleSubmit = this.handleSubmit.bind(this)
	}

	allStocks(){
		axios({
			url: 'http://localhost:3000/stocks',
			method: 'get'
		}).then(response => {
			console.log('allStocks: ', response);
			this.setState({ allStocks: response.data });
		});
	}

	// handleChange(el) {
	// 	const key = el.target.name;
	// 	const value = el.target.value;
	// 		this.setState({
	// 		[key]: value
	// 	});
	// }

	// handleSubmit(el) {
	// 	el.preventDefault();
	// 	axios({
	// 		url: 'http://localhost:3000/stocks',
	// 		method: 'POST',
	// 		data: this.state
	// 	}).then(response => {
	// 		console.log('handleSubmit: ', response.data);
	// 	});
	// }

	componentDidMount(){
		this.allStocks()
		// this.handleChange()
		// this.handleSubmit()
	}

	render(){

		const allStocks = this.state.allStocks.map((el, key) => {
			return(
				<tr key={key}>
					<td>{el.itemname}</td>
					<td>{el.itemnumber}</td>
					<td>{el.description}</td>
					<td>${el.price}.00</td>
					<td>{el.stock}</td>
				</tr>
			)
		})

		return (
			<section id="stocks-page-section">
    			<Nav currentUser={this.props.user}/>
    			<div className="searchbar-input-wrap">
			      <input type="search" placeholder="Search" />
			      <i className="searchbar-icon"></i>
			      <span className="input-clear-button"></span>
			    </div>
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