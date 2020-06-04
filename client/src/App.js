import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Nav from './components/Nav';
import Wrapper from "./components/Wrapper";
import Landing from './pages/Landing';
import Favorite from './pages/Favorite';
import Photographer from './pages/Photographer';
import LogIn from './pages/Login';
import SignUp from './pages/Signup';
import Search from './components/KeywordSearch';

import API from './utils/API'

class App extends Component {
  // API.getUnsplashPhotos().then((data) => {
  //   console.log(data.data);
  // })
  constructor() {
    super()
    this.state = {
      loggedIn: false,
      username: null,
      user: null
    }

    // this.getUser = this.getUser.bind(this)
    // this.componentDidMount = this.componentDidMount.bind(this)
    this.updateUser = this.updateUser.bind(this)
  }

  updateUser(userObject) {
    console.log(userObject);
    this.setState(userObject)
  }



  render() {
    return (
      <Router>
      <div className="App">
      <Nav updateUser={this.updateUser} loggedIn={this.state.loggedIn} />
      <Wrapper>
      <Route exact path="/" component={Landing}/> 
      <Route exact path="/signup" component={SignUp}/>
      {/* <Route exact path="/login" updateUser={this.updateUser} component={LogIn}/> */}
      <Route
          path="/login"
          render={() =>
            <LogIn
              updateUser={this.updateUser}
            />}
        />
      <Route path="/photographer/:username" render={() =>
        < Photographer updateUser={this.updateUser} loggedIn={this.state.loggedIn} />
      } />
      <Route path="/favorite" render={() =>
        < Favorite updateUser={this.updateUser} loggedIn={this.state.loggedIn} />
      } />
      </Wrapper>
      </div>
      </Router>
    );
  }
  
}

export default App;

