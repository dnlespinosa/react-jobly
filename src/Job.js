import React, { useState, useEffect } from 'react'
import JoblyApi from './api/api';

import { Link, useParams, apply } from 'react-router-dom'

const Job = ({ id, title, companyName, salary, equity, applyToJob, currentUser }) => {
    const [applied, setApplied] = useState()

    const handleSubmit = (e) => {
        e.preventDefault()
        const id = e.target.parentElement.getAttribute('data-index')
        applyToJob(currentUser.username, id)
        setApplied(true)
      }

      return (
        <>
                    <div key={id} data-index={id}>
                        <h3>{title}</h3>
                        <h5>{companyName}</h5>
                        <p>Salary: {salary ? salary : 0}</p>
                        <p>Equity: {equity ? equity : 0}</p>
                          <button disabled={applied} onClick={handleSubmit}>
                            {applied? 'Applied!' : 'Apply'}
                          </button>
                    </div>

        </>
      )
}

export default Job