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

function Routess() {

  return (
        <Routes>
            <Route exact path='/companies' element={<Companies />}/>
            <Route exact path='/companies/:name' element={<Company />}/>
            <Route exact path='/jobs' element={<Jobs />}/>
            <Route exact path='/login' element={<Login />}/>
            <Route exact path='/profile' element={<Profile />}/>
            <Route exact path='/signup' element={<Signup />}/>
            <Route exact path='/' element={<Home />}/>
        </Routes>
  );
}

export default Routess;
