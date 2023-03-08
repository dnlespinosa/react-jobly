import React, { useState, useEffect } from 'react'
import JoblyApi from './api/api';

import { Link, useParams } from 'react-router-dom'

const Jobs = () => {
    const [jobs, setJobs] = useState([])

    useEffect(() => {
        async function getAllJobs() {
          let jobs = await JoblyApi.getAllJobs()
          setJobs(jobs)
          console.log(jobs)
        }
        getAllJobs();
      }, [])

      return (
        <>
            <h1>Job List</h1>
            {jobs.map(job => {
                return (
                    <div key={job.id}>
                        <h3>{job.title}</h3>
                        <h5>{job.companyName}</h5>
                        <p>Salary: {job.salary ? job.salary : 0}</p>
                        <p>Equity: {job.equity ? job.equity : 0}</p>
                    </div>
                )
            })}
        </>
      )
}

export default Jobs