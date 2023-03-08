import React from 'react'

import { Link, useParams } from 'react-router-dom'

import Login from './Login'

const Home = () => {
    return(
        <>
            <h1>Home Page</h1>
            <Login />
        </>
    )
}

export default Home