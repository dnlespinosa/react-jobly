import React, { useState, useEffect } from 'react'
import JoblyApi from './api/api';

import { Link, useParams } from 'react-router-dom'

const CompanyLink = ({ companyy }) => {
    const [company, setCompany] = useState(companyy)

    return (
        <>
            <Link to={`/companies/${company.handle}`}>{company.handle}</Link>
            <p>{company.description}</p>
        </>
    )
}

export default CompanyLink