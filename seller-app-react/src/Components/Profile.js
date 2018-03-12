import React, { Component } from 'react';
import Nav from './Nav';

export default class Profile extends Component {
	render(){
		if(this.props.allUser) {
			return "Loading";
		}
		else {
			console.log('Profile file: ', this.props.allUser)
			// const currentUser = this.props.allUser.find(el => {
   //  			if(el.id === this.props.match.params.id) {
   //  				console.log(el)
   				const currentUser = this.props.user
	    		return(
	    			<section id="profile-page-section">
		    			<Nav user={this.props.user}/>
		    			
	    			</section> )
	    		// )}
    		}
    		// )
		}
	}
// }

