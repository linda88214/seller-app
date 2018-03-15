import React, { Component } from 'react';
import axios from 'axios'

export default class Stocks extends Component {
    constructor(props){
        super(props)

        this.state = {
            itemname: '',
            itemnumber: '',
            description: '',
            price: '',
            stock: ''
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
        axios('http://localhost:3000/stocks', {
            method: "POST",
            data: this.state
        }).then(resp => {
            console.log("posted?")
            
        })
    }

	render(){
		return (
			<section id="newstock-page-section">
        			<form onSubmit={this.handleSubmit} className="newstock-form">
                        <table>
                            <tbody>
                            <tr>
        					<td><input type="text" name="itemname" onChange={this.handleChange} value={this.state.itemname} /></td>
                            
        					<td><input type="text" name="itemnumber" onChange={this.handleChange} value={this.state.itemnumber} /></td>
                            
        					<td><input type="text" name="description" onChange={this.handleChange} value={this.state.description} /></td>
                            
        					<td><input type="text" name="price" onChange={this.handleChange} value={this.state.price} /></td>
                            
        					<td><input type="text" name="stock" onChange={this.handleChange} value={this.state.stock} /></td>
                            </tr>
                            </tbody>
                        </table>
        				<button type="submit" value="Submit" className="create-stock-button">CREATE</button>
        			</form>
			</section>
		)
	}
}




// <section id="newstock-page-section">
        // <form onSubmit={this.handleSubmit} className="newstock-form">
            // <h1>Create New Item</h1>
                // <label><p>Item Name: </p><br />
                // <input type="text" name="itemname" onChange={this.handleChange} value={this.state.itemname} />
                // </label>
                // <br />
                // <label><p>Item Number: </p><br />
                // <input type="text" name="itemnumber" onChange={this.handleChange} value={this.state.itemnumber} />
                // </label>
                // <br />
                // <label><p>Description</p><br />
                // <input type="text" name="description" onChange={this.handleChange} value={this.state.description} />
                // </label>
                // <br />
                // <label><p>Price: </p><br />
                // <input type="number" name="price" onChange={this.handleChange} value={this.state.price} />
                // </label>
                // <br />
                // <label><p>Stock: </p><br />
                // <input type="number" name="stock" onChange={this.handleChange} value={this.state.stock} />
                // </label>
                // <br />
            // <button type="submit" value="Submit">CREATE</button>
        // </form>
// </section>

