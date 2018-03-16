import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios'
import TokenService from "../services/TokenService"

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
			itemsleft: '',
			redirect: false
		}
		this.allStocks = this.allStocks.bind(this)
		this.currentStock = this.currentStock.bind(this)
		this.handleChange = this.handleChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
	}

	allStocks(){
		axios({
			headers: {
		        'Content-type': 'application/json',
		        Authorization: `Bearer ${TokenService.read()}`,
      		},
			url: 'http://localhost:3000/stocks',
			method: 'get'
		}).then(response => {
			// console.log('allStocks: ', response);
			this.setState({ allStocks: response.data });
		});
	}

  	currentStock() {
  		axios({
  			headers: {
		        'Content-type': 'application/json',
		        Authorization: `Bearer ${TokenService.read()}`,
      		},
  			url: `http://localhost:3000/stocks/${this.props.match.params.id}`,
  			method:'GET'
  		}).then(response => {
  			// console.log('currentStock: ', response.data)
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
			headers: {
		        'Content-type': 'application/json',
		        Authorization: `Bearer ${TokenService.read()}`,
      		},
			url: `http://localhost:3000/stocks/${this.props.match.params.id}`,
			method: 'PUT',
			data: this.state
		}).then(response => {
			console.log('handleSubmit: ', response.data);
			this.setState({redirect: true})
		}).catch(e => {
    		console.log(e);
    	})
	}

	componentDidMount(){
		this.allStocks()
		this.currentStock()
	}

	render(){
		const currentStock = this.state.currentStock
		const redirect = this.state.redirect
		// console.log(redirect)

		if(redirect){
			return <Redirect to="/user/stocks/all" /> 
		}

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
					          <input type="text" name="itemsleft" onChange={this.handleChange} value={this.state.itemsleft} placeholder={currentStock.itemsleft} />
					        </label>
					        <br />

    					<button name="submit" value="Submit" className="update-stock-button">Update</button>
    				</form>
    			</div>
			</section>
		)
	}
}

