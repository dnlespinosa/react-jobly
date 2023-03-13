import React, { useState, useEffect } from 'react'
import JoblyApi from './api/api';
import Job from './Job';
import { Link, useParams } from 'react-router-dom'

const Company = ({ currentUser, applyToJob }) => {
    const { name } = useParams();

    const [company, setCompany] = useState([])
    const [jobs, setJobs] = useState([])

    useEffect(() => {
      async function getAllJobs() {
        let jobs = await JoblyApi.getAllJobs()
        setJobs(jobs)
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
                  <Job id={job.id} title={job.title} companyName={job.companyName} salary={job.salary} equity={job.equity} applyToJob={applyToJob} currentUser={currentUser} key={job.id}/>
                )
            })}
        </>
    )
}

export default Company