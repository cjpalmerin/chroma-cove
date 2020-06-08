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

class App extends Component {
  constructor() {
    super()
    this.state = {
      loggedIn: false,
      username: null,
      user: null,
      photographers: []
    }

    this.updateUser = this.updateUser.bind(this)
  }

  updateUser(userObject) {
    this.setState(userObject)
  }

  render() {
    return (
      <Router>
      <div className="App">
      <Nav updateUser={this.updateUser} loggedIn={this.state.loggedIn} username={this.state.username}/>
      <Wrapper>
      <Route exact path="/" component={Landing}/> 
      <Route path="/signup" component={SignUp}/>
      <Route
          path="/login"
          render={() =>
            <LogIn
              updateUser={this.updateUser}
            />}
        />
      <Route path="/photographer/:username" render={() =>
        < Photographer updateUser={this.updateUser} loggedIn={this.state.loggedIn} photographers={this.state.photographers} />
      } />
      <Route path="/favorite" render={() =>
        < Favorite updateUser={this.updateUser} loggedIn={this.state.loggedIn} username={this.state.username} photographers={this.state.photographers} />
      } />
      </Wrapper>
      </div>
      </Router>
    );
  }
  
}

export default App;

