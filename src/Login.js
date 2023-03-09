import React, { useState, useEffect } from 'react'
import JoblyApi from './api/api';

import { Link, useParams, redirect } from 'react-router-dom'

const Login = ({ login }) => {
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
        login(userInfo.username)
        redirect('/')
    }

    return (
        <>
            <form onSubmit={handleSubmit} >
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
                <button>SUBMIT</button>
            </form>
        </>
    )
}

export default Login