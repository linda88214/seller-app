import React, { Component } from 'react';
import axios from 'axios'
import Nav from './Nav'

export default class Stocks extends Component {
	constructor(props){
		super(props)

		this.state = {
			allStocks: []
		}
		this.allStocks = this.allStocks.bind(this)
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

	componentDidMount(){
		this.allStocks()
	}

	render(){

		this.state.allStocks.map(el => {
			
		})

		return (
			<section id="stocks-page-section">
    			<Nav currentUser={this.props.user}/>
    			<div>

    			</div>
			</section>
		)
	}
}