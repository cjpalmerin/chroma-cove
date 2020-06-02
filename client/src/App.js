import React from 'react';
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

function App() {
  API.getUnsplashPhotos().then((data) => {
    console.log(data.data);
  })
  return (
    <Router>
    <div className="App">
    <Nav/>
    <Wrapper>
    <Route exact path="/" component={Landing}/> 
    <Route exact path="/search" component={Search}/> 
    <Route exact path="/signup" component={SignUp}/>
    <Route exact path="/login" component={LogIn}/>
    <Route path="/photographer" component={Photographer}/>
    <Route path="/favorite" component={Favorite}/>
    </Wrapper>
    </div>
    </Router>
  );
}

export default App;
