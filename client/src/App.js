import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
// import Keyword from './components/KeywordSearch';
// import Color from './components/ColorSearch';
// import PhotoCard from './components/PhotoCard';

import API from './utils/API'

function App() {
  API.getUnsplashPhotos().then((data) => {
    console.log(data);
  })
  return (
    <div className="App">
      <Nav/>
      {/* <Keyword/>
      <Color/>
      <PhotoCard/> */}
    </div>
  );
}

export default App;
