import React from 'react';
import './JobDetail.css'
// import { CurrencyDollarIcon, CalendarDaysIcon, PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/solid'
import { useLoaderData } from 'react-router-dom';


const JobDetail = ({job}) => {
    const {job_title, company_name, location} = job
 console.log(job)

    return (
        <div className='details-container text-left'>
            <h2>Title: {job_title}</h2>
            <h2>Company: {company_name}</h2>
            <h2>location: {location}</h2>
        </div>

    );

};

export default JobDetail;