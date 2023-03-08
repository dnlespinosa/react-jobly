import React, { useState, useEffect } from 'react'
import JoblyApi from './api/api';

import { Link, useParams } from 'react-router-dom'

const Company = () => {
    const { name } = useParams();

    const [company, setCompany] = useState([])
    const [jobs, setJobs] = useState([])

    useEffect(() => {
      async function getAllJobs() {
        let jobs = await JoblyApi.getAllJobs()
        setJobs(jobs)
        console.log(jobs)
      }
      getAllJobs();
    }, [])

    useEffect(() => {
        async function getCompany(enter) {
          let company = await JoblyApi.getCompany(enter)
          setCompany(company)
          console.log(company)
        }
        getCompany(name);
      }, [])

    return (
        <>
          <h1>{company.handle}</h1>
          <p>{company.description}</p>
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

export default Company