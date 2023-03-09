import React, { useState, useEffect } from 'react'
import JoblyApi from './api/api';
import './App.css';
import { BrowserRouter, redirect } from 'react-router-dom';
import Nav from './Nav';
import Routess from './Routes';
import Home from './Home';



function App() {
  const [currUser, setCurrUser] = useState(false)
  const [currentUser, setCurrentUser] = useState()
  const [token, setToken] = useState()

  const login = async (username) => {
    let users = await JoblyApi.getUser(username);
    setCurrentUser(users)
    console.log(users)
    setCurrUser(true)
  }

  const signup = async (username, password, firstName, lastName, email) => {
    let token = await JoblyApi.registerUser(username, password, firstName, lastName, email)
    setToken(token)
    login(username)
  }

  const logout = async () => {
    setCurrUser(false)
  }


  return (
    <div className="App">
      <BrowserRouter>
        <Nav currUser={currUser} currentUser={currentUser} logout={logout}/>
        <Routess currUser={currUser} login={login} currentUser={currentUser} signup={signup}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
