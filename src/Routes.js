import React, { useState, useEffect } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import Companies from "./Companies";
import Company from "./Company";
import Jobs from "./Jobs";
import Login from "./Login";
import Profile from "./Profile";
import Signup from "./Signup";
import Home from "./Home";
import JoblyApi from './api/api';

function Routess({ currUser, login, currentUser, signup }) {

  return (
        <Routes>
            <Route exact path='/companies' element={<Companies />}/>
            <Route exact path='/companies/:name' element={<Company />}/>
            <Route exact path='/jobs' element={<Jobs />}/>
            <Route exact path='/login' element={<Login login={login}/>}/>
            <Route exact path='/profile' element={<Profile />}/>
            <Route exact path='/signup' element={<Signup signup={signup}/>}/>
            <Route exact path='/' element={<Home currUser={currUser} login={login} currentUser={currentUser}/>}/>
        </Routes>
  );
}

export default Routess;
