import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Nav from './Nav';
import Routess from './Routes';
import Home from './Home';



function App() {


  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routess />
      </BrowserRouter>
    </div>
  );
}

export default App;
