import React, { useState, useEffect } from 'react'
import JoblyApi from './api/api';
import Job from './Job';
import { Link, useParams, apply, applyToJob } from 'react-router-dom'

const Jobs = ({ apply, applyToJob, currentUser }) => {
    const [jobs, setJobs] = useState([])
    const [applied, setApplied] = useState(false)

    useEffect(() => {
        async function getAllJobs() {
          let jobs = await JoblyApi.getAllJobs()
          setJobs(jobs)
        }
        getAllJobs();
      }, [])



      return (
        <>
            <h1>Job List</h1>
            {jobs.map(job => {
                return (
                    <Job id={job.id} title={job.title} companyName={job.companyName} salary={job.salary} equity={job.equity} applyToJob={applyToJob} currentUser={currentUser} key={job.id}/>
                )
            })}
        </>
      )
}

export default Jobs