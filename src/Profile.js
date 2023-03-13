import React, { useState } from 'react'

import { Link, useParams, useNavigate } from 'react-router-dom'

const Profile = ({ currentUser, edit }) => {
    const INTITIALSTATE = {
        firstName: '', 
        lastName: '',
        password: '',
        email: ''
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
        edit(currentUser.username, userInfo.firstName, userInfo.lastName, userInfo.password, userInfo.email)
        return navigate('/')
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
            
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
                placeholder={currentUser.firstName}
                onChange={handleChange} />

                <label htmlFor='last_name'>Enter Your Last Name</label>
                <input type='text'
                id='last_name'
                name='last_name'
                placeholder={currentUser.lastName}
                onChange={handleChange} />

                <label htmlFor='email'>Enter Your email</label>
                <input type='text'
                id='email'
                name='email'
                placeholder={currentUser.email}
                onChange={handleChange} />
                <button>SUBMIT</button>
            </form>
        </>
    )
}

export default Profile