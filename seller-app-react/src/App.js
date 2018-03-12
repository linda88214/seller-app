import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import axios from 'axios'
import './App.css';

import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Profile from "./Components/Profile";
import Stocks from "./Components/Stocks";
import UpdateStock from "./Components/Updatestock";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: 4,
      allSellersData: null,
      sellersData: null,
      currentUser: []
    };

  }

  allSellers() {
    axios({
      url: 'http://localhost:3000/sellers',
      method: 'get'
    }).then(response => {
      console.log('allSellers: ', response.data);
      this.setState({ allSellersData: response.data });
    });
  }

  currentUser() {
    axios({
      url: `http://localhost:3000/sellers/${this.state.id}`,
      method: 'get'
    }).then(response => {
      console.log('currentUser: ', response.data);
      this.setState({ currentUser: response.data });
    });
  }

  componentDidMount(){
    this.allSellers();
    this.currentUser();
  }

  // register(data){
  //   axios('http://localhost:3000/sellers', {
  //     method:'POST',
  //     data
  //   }).then(resp => {
  //     TokenService.save(resp.data.token)
  //   }).catch(err => console.log(`err: ${err}`));
  // }

  // login(data){
  //   axios('http://localhost:3000/sellers/login', {
  //     method: 'POST',
  //     data
  //   }).then(resp => {
  //     TokenService.save(resp.data.token)
  //   }).catch(err => console.log(`err: ${err}`));
  // }

  // authClick(el){
  //   el.preventDefault();
  //   axios('http://localhost:3000/sellers/user/:id/profile', {
  //     headers: {
  //       Authorization: `Bearer ${TokenService.read()}`,
  //     },
  //   }).then(resp => console.log(resp))
  //   .catch(err => console.log(err));
  //   })
  // }
  
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

            <Route exact path="/sellers/user/:id/profile"
              render={props => {
                return (
                  <Profile {...props} 
                  user={this.state.currentUser} 
                  alluser={this.state.allSellersData}/>
                )
              }}
            />

            <Route exact path="/sellers/user/:id/stocks"
              render={props => {
                return (
                  <Stocks />
                )
              }}
            />

            <Route exact path="/sellers/user/:id/stocks/update"
              render={props => {
                return (
                  <UpdateStock />
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
