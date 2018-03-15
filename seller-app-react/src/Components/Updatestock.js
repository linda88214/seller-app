import React, { Component } from 'react';
import axios from 'axios'

export default class Stocks extends Component {
	constructor(props){
		super(props)

		this.state = {
			allStocks: [],
			currentStock: [],
			itemname: '',
			itemnumber: '',
			description: '',
			price: '',
			stock: ''
		}
		this.allStocks = this.allStocks.bind(this)
		this.currentStock = this.currentStock.bind(this)
		this.handleChange = this.handleChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
	}

	allStocks(){
		axios({
			url: 'http://localhost:3000/stocks',
			method: 'get'
		}).then(response => {
			// console.log('allStocks: ', response);
			this.setState({ allStocks: response.data });
		});
	}

  	currentStock() {
  		axios({
  			url: `http://localhost:3000/stocks/${this.props.match.params.id}`,
  			method:'GET'
  		}).then(response => {
  			console.log('currentStock: ', response.data)
  			this.setState({ currentStock: response.data})
  		})
  	}

	handleChange(el) {
		const key = el.target.name;
		const value = el.target.value;
			this.setState({
			[key]: value
		});
	}

	handleSubmit(el) {
		el.preventDefault();
		axios({
			url: `http://localhost:3000/stocks/${this.props.match.params.id}`,
			method: 'PUT',
			data: this.state
		}).then(response => {
			console.log('handleSubmit: ', response.data);
		});
	}

	componentDidMount(){
		this.allStocks()
		this.currentStock()
		// this.handleChange()
		// this.handleSubmit()
	}

	render(){
		const currentStock = this.state.currentStock
		return (
			<section id="updatestocks-page-section">
    			<div className="updatestocks-table-div">
    				<form onSubmit={this.handleSubmit}>
    					<h1>UPDATE STOCK</h1>
					        <label><p>Item Name:</p>
					        <input type="text" name="itemname" onChange={this.handleChange} value={this.state.itemname} placeholder={currentStock.itemname} />
					        </label>
					        <br />

					        <label><p>Item Number:</p>
					          <input type="text" name="itemnumber" onChange={this.handleChange} value={this.state.itemnumber} placeholder={currentStock.itemnumber} />
					        </label>
					        <br />

					        <label><p>Description:</p>
					          <input type="text" name="description" onChange={this.handleChange} value={this.state.description} placeholder={currentStock.description} />
					        </label>
					        <br />

					        <label><p>Price:</p>
					          <input type="text" name="price" onChange={this.handleChange} value={this.state.price} placeholder={currentStock.price} />
					        </label>
					        <br />

					        <label><p>Stock:</p>
					          <input type="text" name="stock" onChange={this.handleChange} value={this.state.stock} placeholder={currentStock.stock} />
					        </label>
					        <br />

    					<button name="submit" value="Submit" className="update-stock-button">Update</button>
    				</form>
    			</div>
			</section>
		)
	}
}




// <table className="updatestocks-table">
//     					<thead>
//     						<tr>
// 	    						<th>Item Name</th>
// 	    						<th>Item Number</th>
// 	    						<th>Description</th>
// 	    						<th>Price</th>
// 	    						<th>Stocks</th>
// 	    					</tr>
//     					</thead>
//     					<tbody>
//     						<tr>
//     							<td><input name="itemname" placeholder={currentStock.itemname} value={this.state.itemname} onChange={this.handleChange} /></td>
//     							<td><input name="itemnumber" placeholder={currentStock.itemnumber} value={this.state.itemnumber} onChange={this.handleChange} /></td>
//     							<td><input name="description" placeholder={currentStock.description} value={this.state.description} onChange={this.handleChange} /></td>
//     							<td><input name="price" placeholder={currentStock.price} value={this.state.price} onChange={this.handleChange} /></td>
//     							<td><input name="stock" placeholder={currentStock.stock} value={this.state.stock} onChange={this.handleChange} /></td>
//     						</tr>
//     					</tbody>
//     				</table>