import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Wrapper from "./components/Wrapper"
import Keyword from './components/KeywordSearch';
import PhotoCard from './components/PhotoCard';
import Login from './pages/Login'

import API from './utils/API'

function App() {
  API.getUnsplashPhotos().then((data) => {
    console.log(data);
  })
  return (
    <div className="App">
      <Nav />
      <Wrapper>
{/* UNCOMMENT THESE FOR THE KEYWORD SEARCH */}
        {/* <Keyword />
        <PhotoCard />
        <PhotoCard />
        <PhotoCard /> */}

{/* UNCOMMENT THESE FOR THE LOGIN DIV */}
        <Login />
      </Wrapper>
    </div>
  );
}

export default App;
