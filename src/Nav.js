import React, { useState, useEffect } from 'react'
import JoblyApi from './api/api';
import { Link, useParams, redirect, useNavigate } from 'react-router-dom'

function Nav({ currUser, setCurrUser, logout }) {
  

  const handleSubmit = (e) => {
    e.preventDefault()
    logout()
}
  
  return (
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to='/companies'>Companies</Link></li>
      <li><Link to='/jobs'>Jobs</Link></li>
      {currUser ?
        <div> 
          <li><Link to='/profile'>Profile</Link></li>

            <li><Link to='/' onClick={handleSubmit}>Logout</Link></li>
          
        </div> : 
        <div>
          <li><Link to='/login'>Login</Link></li>
          <li><Link to='/signup'>Signup</Link></li>
        </div>}
      
    </ul>
  );
}


export default Nav;