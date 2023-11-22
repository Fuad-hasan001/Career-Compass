import React from 'react';
import './JobDetail.css'
// import { CurrencyDollarIcon, CalendarDaysIcon, PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/solid'
import { useLoaderData } from 'react-router-dom';


const JobDetail = () => {
    // const {job_title, company_name, location} = job
//  console.log(job)

    return (
        <div className='details-container text-left'>
            <h2>job Details Section</h2>
            <h2>Title:</h2>
            <h2>Company: </h2>
            <h2>location: </h2>
        </div>

    );

};

export default JobDetail;