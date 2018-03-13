import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import axios from 'axios'
import './App.css';

// import Nav from "./Components/Nav";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Profile from "./Components/Profile";
import Stocks from "./Components/Stocks";
import Newstock from "./Components/Newstock";
import UpdateStock from "./Components/Updatestock";
import Orders from "./Components/Orders";
import Orderstatus from "./Components/Orderstatus";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: 5,
      allUsers: null,
      currentUser: []
    };

  }

  allUsers() {
    axios({
      url: 'http://localhost:3000/sellers',
      method: 'get'
    }).then(response => {
      this.setState({ allUsers: response.data })
      // console.log('allUsers: ', this.state.allUsers);
    });
  }

  currentUser() {
    axios({
      url: `http://localhost:3000/sellers/${this.state.id}`,
      method: 'get'
    }).then(response => {
      // console.log('currentUser: ', response.data);
      this.setState({ currentUser: response.data });
    });
  }

  componentDidMount(){
    this.allUsers();
    this.currentUser();
  }
  
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/"
              render={() => <Redirect to="/sellers/login" />}
            />

            <Route exact path="/sellers/login"
              render={props => {
                return (
                  <Login />
                )
              }}
            />

            <Route exact path="/sellers/signup"
              render={props => {
                return (
                  <Signup />
                )
              }}
            />

            <Route exact path="/sellers/user/profile/:id"
              render={props => {
                return (
                  <div>
                    <Profile {...props} 
                    user={this.state.currentUser} 
                    allUsers={this.state.allUsers}/>
                  </div>
                )
              }}
            />

            <Route exact path="/sellers/user/:id/stocks/all"
              render={props => {
                return (
                  <Stocks {...props} user={this.state.currentUser}/>
                )
              }}
            />

            <Route exact path="/sellers/user/:id/stocks/new"
              render={props => {
                return (
                  <Newstock {...props} user={this.state.currentUser} />
                )
              }}
            />

            <Route exact path="/sellers/user/:id/stocks/update"
              render={props => {
                return (
                  <UpdateStock {...props} user={this.state.currentUser} />
                )
              }}
            />

            <Route exact path="/sellers/user/:id/orders"
              render={props => {
                return (
                  <Orders {...props} user={this.state.currentUser} />
                )
              }}
            />

            <Route exact path="/sellers/user/:id/orderstatus"
              render={props => {
                return (
                  <Orderstatus {...props} user={this.state.currentUser} />
                )
              }}
            />

          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
