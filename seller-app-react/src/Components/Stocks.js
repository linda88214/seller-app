import React, { Component } from 'react';
import axios from 'axios'
import Nav from './Nav'

export default class Stocks extends Component {
	constructor(props){
		super(props)

		this.state = {
			allStocks: []
		}
	}

	allStocks(){
		axios({
		  url: 'http://localhost:3000/stocks',
		  method: 'get'
		}).then(response => {
		  console.log('allStocks: ', response.data);
		  this.setState({ allStocks: response.data });
		});
	}

	render(){
		console.log(this.allStocks)
		return (
			<section id="stocks-page-section">
    			<Nav user={this.props.user}/>
    			
			</section>
		)
	}
}