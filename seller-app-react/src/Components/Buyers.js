import React, { Component } from "react";
// import { Link } from 'react-router-dom';

export default class Buyers extends Component {

	render() {

		if(this.props.allCustomers === null){
			return "Loading"
		} 
		else{
		
			// console.log('Buyers page: ', this.props.allCustomers)
			const allCustomers = this.props.allCustomers.map((el, key) => {
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
				<h1>All Customers Information</h1>
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