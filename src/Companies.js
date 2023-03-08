import React, { useState, useEffect } from 'react'
import JoblyApi from './api/api';
import CompanyLink from './CompanyLink';
import SearchFrom from './SearchForm';

import { Link, useParams } from 'react-router-dom'

const Companies = () => {
    const [companies, setCompanies] = useState([])
    const [isSearched, setIsSearched] = useState(false)

    useEffect(() => {
        async function getAllCompanies() {
          let companies = await JoblyApi.getAllCompany()
          setCompanies(companies)
          console.log(companies)
        }
        getAllCompanies();
      }, [])

    async function search(term) {
        let companies = await JoblyApi.getAllCompany(term)
        setCompanies(companies)
        console.log(companies)
    }

    return (
        <>
            <h1>Here's a List Of All Companies</h1>
            <SearchFrom search={search}/>
            {companies.map(company => {
                return (
                    <CompanyLink companyy={company} key={company.handle}/>
                )
            })}
        </>
    )
}

export default Companies