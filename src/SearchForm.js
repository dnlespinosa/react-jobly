import React, { useState } from 'react';

function SearchFrom({ search }) {
    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = (e) => {
        setSearchTerm(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        search(searchTerm)
        setSearchTerm('')
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor='name'>Enter A Company Name</label>
                <input type='text'
                id='name'
                name='name'
                placeholder='Enter Here'
                onChange={handleChange} />
                <button>SEARCH</button>
            </form>
        </>
    )
}

export default SearchFrom