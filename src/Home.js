import React from 'react'

import { Link, useParams } from 'react-router-dom'

import Login from './Login'

const Home = ({ currUser, login, currentUser }) => {
    return(
        <>
            {currUser ? 
            <div>
                <h1>Welcome back {currentUser.firstName}</h1>
            </div> : 
            <div>
                <h1>Welcome, be sure to login or signup!</h1>
                <Link to='/login'>Login</Link>
                <Link to='/signup'>Signup</Link>
            </div>
            }
            
        </>
    )
}

export default Home