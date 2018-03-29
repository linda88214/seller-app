import React, { Component } from "react";
// import { Link } from 'react-router-dom';
import axios from 'axios';
import TokenService from "../services/TokenService"

export default class Buyers extends Component {
	constructor(props){
		super(props)

		this.state = {
			allCustomers: []
		}
	}

  allCustomers() {
    axios({
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${TokenService.read()}`,
      },
      url: 'http://localhost:3000/buyers',
      method: 'GET'
    }).then(response => {
      this.setState({ allCustomers: response.data })
      // console.log('allCustomers: ', this.state.allCustomers);
    });
  }

   componentDidMount(){
    this.allCustomers()
  }

	render() {

		if(this.state.allCustomers === null){
			return "Loading"
		} 
		else{
		
			// console.log('Buyers page: ', this.props.allCustomers)
			const allCustomers = this.state.allCustomers.map((el, key) => {
				// console.log(el.id)
	    		return(
	    			<tr key={key}>
	    				<td>{el.name}</td>
						<td>{el.email}</td>
						<td>{el.address}</td>
						<td>{el.phonenumber}</td>
	    			</tr>
	    		)
	    	})

		return(
			<section id="allcustomers-page-section">
				<h1>ALL CUSTOMERS</h1>
				<div className="allcustomers-table-div">
					<table className="allcustomers-table">
						<thead>
							<tr>
	    						<th>Customer</th>
	    						<th>Email</th>
	    						<th>Address</th>
	    						<th>Phone Number</th>
	    					</tr>
						</thead>
						<tbody>
							{allCustomers}
						</tbody>
	    			</table>
	    		</div>
	    	</section>
		)
	}
}
}