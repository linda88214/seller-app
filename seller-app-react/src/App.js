import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import axios from 'axios'
import './App.css';
import TokenService from './services/TokenService';

import Nav from "./Components/Nav";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Profile from "./Components/Profile";
import Stocks from "./Components/Stocks";
import Newstock from "./Components/Newstock";
import UpdateStock from "./Components/Updatestock";
import Orders from "./Components/Orders";
import Orderstatus from "./Components/Orderstatus";
import Buyers from "./Components/Buyers";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: null,
      allUsers: null,
      currentUser: [],
      allCustomers: null,
      redirect: false
    };
  }

  allUsers() {
    axios({
      url: 'http://localhost:3000/users',
      method: 'get'
    }).then(response => {
      this.setState({ allUsers: response.data })
      // console.log('allUsers: ', this.state.allUsers);
    });
  }

  currentUser() {
    axios({
      url: `http://localhost:3000/users/${this.state.id}`,
      method: 'get'
    }).then(response => {
      // console.log('currentUser: ', response.data);
      this.setState({ currentUser: response.data });
    });
  }

  allCustomers() {
    axios({
      url: `http://localhost:3000/buyers`,
      method: 'GET'
    }).then(response => {
      this.setState({ allCustomers: response.data })
      // console.log('allCustomers: ', this.state.allCustomers);
    });
  }

  componentDidMount(){
    this.allUsers();
    this.currentUser();
    this.allCustomers();
  }

  register(data) {
    axios('http://localhost:3000/users/', {
      method: "POST",
      data
    }).then(resp => {
      TokenService.save(resp.data.token)
    })
    .catch(err => console.log(`err: ${err}`));
  }

  login(data) {
    axios('http://localhost:3000/users/login', {
      method: "POST",
      data
    }).then(resp => {
      TokenService.save(resp.data.token);
      this.setState({ redirect: true, currentUser: resp.data.user, id: resp.data.user.id })
      // console.log("currentUser: ", resp.data.user)
      // console.log('user id: ', this.state.id)
    })
    .catch(err => console.log(`err: ${err}`));
  }

  logout(ev) {
    ev.preventDefault();
    TokenService.destroy();
    window.location.reload()
  }

  checkLogin() {
    axios('http://localhost:3000/isLoggedIn', {
      headers: {
        Authorization: `Bearer ${TokenService.read()}`,
      },
    }).then(resp => console.log('checkLogin: ',resp))
    .catch(err => console.log(err));
  }

  
  render() {
    // console.log('user id: ', this.state.id)
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/"
              render={() => <Redirect to="/user/login" />}
            />

            <Route exact path="/user/login"
              render={props => { return <Login {...props} submit={this.login.bind(this)} redirect={this.state.redirect} id={this.state.id} /> }} 
            />

            <Route exact path="/user/signup"
              render={props => { return <Signup {...props} submit={this.register.bind(this)} redirect={this.state.redirect} id={this.state.id} /> }}
            />

            <Route exact path="/user/profile/:id"
              render={props => {
                return (
                  <div>
                    <Nav {...props} currentUser={this.state.currentUser} logout={this.logout.bind(this)}/>
                    <Profile {...props} 
                    currentUser={this.state.currentUser}
                    allUsers={this.state.allUsers} />
                  </div>
                )
              }}
            />

            <Route exact path="/user/:id/stocks/all"
              render={props => {
                return (
                  <div>
                    <Nav {...props} currentUser={this.state.currentUser} logout={this.logout.bind(this)}/>
                    <Stocks {...props} user={this.state.currentUser}/>
                  </div>
                )
              }}
            />

            <Route exact path="/user/:id/stocks/new"
              render={props => {
                return (
                  <div>
                    <Nav {...props} currentUser={this.state.currentUser} logout={this.logout.bind(this)}/>
                    <Newstock {...props} user={this.state.currentUser} />
                  </div>
                )
              }}
            />

            <Route exact path="/user/:id/stocks/update"
              render={props => {
                return (
                  <div>
                    <Nav {...props} currentUser={this.state.currentUser} logout={this.logout.bind(this)}/>
                    <UpdateStock {...props} user={this.state.currentUser} />
                  </div>
                )
              }}
            />

            <Route exact path="/user/:id/orders"
              render={props => {
                return (
                  <div>
                    <Nav {...props} currentUser={this.state.currentUser} logout={this.logout.bind(this)}/>
                    <Orders {...props} user={this.state.currentUser} />
                  </div>
                )
              }}
            />

            <Route exact path="/user/:id/orderstatus"
              render={props => {
                return (
                  <div>
                    <Nav {...props} currentUser={this.state.currentUser} logout={this.logout.bind(this)}/>
                    <Orderstatus {...props} user={this.state.currentUser} />
                  </div>
                )
              }}
            />

            <Route exact path="/user/:id/buyers"
              render={props => {
                return (
                  <div>
                    <Nav {...props} currentUser={this.state.currentUser} logout={this.logout.bind(this)}/>
                    <Buyers {...props} allCustomers={this.state.allCustomers} />
                  </div>
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
