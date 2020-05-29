import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
// import Keyword from './components/KeywordSearch';
// import Color from './components/ColorSearch';
// import PhotoCard from './components/PhotoCard';
import Landing from './pages/Landing'

function App() {
  return (
    <div className="App">
      <Nav/>
      <Landing/>
      {/* <Keyword/>
      <Color/>
      <PhotoCard/> */}
    </div>
  );
}

export default App;
