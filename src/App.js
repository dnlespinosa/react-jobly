import React, { useState, useEffect } from 'react'
import JoblyApi from './api/api';
import './App.css';
import { BrowserRouter, redirect, useNavigate } from 'react-router-dom';
import Nav from './Nav';
import Routess from './Routes';
import Home from './Home';



function App() {
  const [currUser, setCurrUser] = useState(false)
  const [currentUser, setCurrentUser] = useState()
  const [token, setToken] = useState()
  const [apply, setApply] = useState(false)

  let navigate = useNavigate()

  useEffect(() => {
    if (localStorage.length >= 1) {
      const getUser = async (username) => {
        let users = await JoblyApi.getUser(username);
        setCurrentUser(users)
        setCurrUser(true)
      }
      getUser(Object.keys(localStorage)[0].toString())
    }
  }, [])

  const login = async (username, password) => {
    let users = await JoblyApi.getUser(username);
    let token = await JoblyApi.getToken(username, password)
    localStorage.setItem(users.username, token)
    setCurrentUser(users)
    setCurrUser(true)
  }

  const signup = async (username, password, firstName, lastName, email) => {
    let token = await JoblyApi.registerUser(username, password, firstName, lastName, email)
    setToken(token)
    login(username)
  }

  const edit = async (username, firstName, lastName, password, email) => {
    let users = await JoblyApi.editUser(username, firstName, lastName, password, email)
    setCurrentUser(users)
  }

  const logout = () => {
    localStorage.clear()
    setCurrUser(false)
  }

  const applyToJob = async (username, jobId) => {
    let apply = await JoblyApi.applyJob(username, jobId)
    console.log(apply)
    setApply(true)
  }
 
  return (
    <div className="App">
        <Nav currUser={currUser} currentUser={currentUser} setCurrUser={setCurrUser} logout={logout}/>
        <Routess currUser={currUser} login={login} currentUser={currentUser} signup={signup} edit={edit} applyToJob={applyToJob} apply={apply}/>
    </div>
  );
}

export default App;
