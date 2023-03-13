import React, { useState, useEffect } from 'react'
import JoblyApi from './api/api';

import { Link, useParams, useNavigate } from 'react-router-dom'

const Signup = ({ signup }) => {
    const INTITIALSTATE = {
        username: '',
        password: '', 
        first_name:'',
        last_name:'',
        email:''
    }

    let navigate = useNavigate()

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
        signup(userInfo.username, userInfo.password, userInfo.first_name, userInfo.last_name, userInfo.email)
        return navigate('/')
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

                <label htmlFor='first_name'>Enter Your First Name</label>
                <input type='text'
                id='first_name'
                name='first_name'
                placeholder='Enter Here'
                onChange={handleChange} />

                <label htmlFor='last_name'>Enter Your Last Name</label>
                <input type='text'
                id='last_name'
                name='last_name'
                placeholder='Enter Here'
                onChange={handleChange} />

                <label htmlFor='email'>Enter Your email</label>
                <input type='text'
                id='email'
                name='email'
                placeholder='Enter Here'
                onChange={handleChange} />
                <button>SUBMIT</button>
            </form>
        </>
    )
}

export default Signup