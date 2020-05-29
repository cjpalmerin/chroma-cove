import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
// import Keyword from './components/KeywordSearch';
// import Color from './components/ColorSearch';
// import PhotoCard from './components/PhotoCard';
import PhotoPage from './pages/Photographer'

function App() {
  return (
    <div className="App">
      <Nav/>
      <PhotoPage/>
      {/* <Keyword/>
      <Color/>
      <PhotoCard/> */}
    </div>
  );
}

export default App;
