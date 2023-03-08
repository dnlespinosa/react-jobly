import React, { useState, useEffect } from 'react'
import JoblyApi from './api/api';

import { Link, useParams } from 'react-router-dom'

const Login = () => {
    const INTITIALSTATE = {
        username: '',
        password: ''
    }

    const [userInfo, setUserInfo] = useState(INTITIALSTATE);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserInfo(userInfo => ({
            ...userInfo,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()

    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor='username'>Enter Your Username</label>
                <input type='text'
                id='username'
                name='username'
                placeholder='Enter Here'
                onChange={handleChange} />

                <label htmlFor='password'>Enter Your Password</label>
                <input type='text'
                id='password'
                name='password'
                placeholder='Enter Here'
                onChange={handleChange} />
                <button>SEARCH</button>
            </form>
        </>
    )
}

export default Login