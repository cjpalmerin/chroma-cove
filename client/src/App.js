import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Nav from './components/Nav';
// import Keyword from './components/KeywordSearch';
// import Color from './components/ColorSearch';
// import PhotoCard from './components/PhotoCard';
import PhotoPage from './pages/Photographer'

function App() {
  return (
    <Router>
    <div className="App">
    <Nav/>
    <Route exact path="/" component={Home}/> 
    {/* search page */}
    <Route exact path="/signup" component={SignUp}/>
    <Route exact path="/login" component={LogIn}/>
    <Route path="/photographer" component={Photographer}/>
    <Route path="/favorite" component={Favorite}/>
    </div>
    </Router>
  );
}

export default App;
