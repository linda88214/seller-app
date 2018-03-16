import React, { Component } from 'react';
import axios from 'axios'
import TokenService from "../services/TokenService"

export default class Stocks extends Component {
    constructor(props){
        super(props)

        this.state = {
            itemname: '',
            itemnumber: '',
            description: '',
            price: '',
            itemsleft: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e){
        const key = e.target.name;
        const value = e.target.value;
        this.setState({
            [key]: value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        axios({
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${TokenService.read()}`,
            },
            url: 'http://localhost:3000/stocks',
            method: "POST",
            data: this.state
        }).then(resp => {
            console.log("posted?")
            this.setState(this.props.allStocks, this.props.history.push(`/user/stocks/all`))
            document.getElementById("newstock-form").reset();
            this.setState({
                itemname: '',
                itemnumber: '',
                description: '',
                price: '',
                itemsleft: ''                
            })
        })
    }

	render(){
		return (
			<section id="newstock-page-section">
    			<form onSubmit={this.handleSubmit} className="newstock-form" id="newstock-form">
                    <table>
                        <tbody>
                        <tr>
    					<td><input type="text" name="itemname" onChange={this.handleChange} value={this.state.itemname} /></td>
                        
    					<td><input type="text" name="itemnumber" onChange={this.handleChange} value={this.state.itemnumber} /></td>
                        
    					<td><input type="text" name="description" onChange={this.handleChange} value={this.state.description} /></td>
                        
    					<td><input type="text" name="price" onChange={this.handleChange} value={this.state.price} /></td>
                        
    					<td><input type="text" name="itemsleft" onChange={this.handleChange} value={this.state.stock} /></td>
                        </tr>
                        </tbody>
                    </table>
    				<button type="submit" value="Submit" className="create-stock-button">CREATE</button>
    			</form>
			</section>
		)
	}
}


