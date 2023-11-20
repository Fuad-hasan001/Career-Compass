import React from 'react';
import { Link } from 'react-router-dom';

const Job = ({job}) => {
    // data receive >> display part >> btn-view details 
    const {id,company_logo,job_title,company_name,job_type,job_time ,location, salary} = job
    return (
        <div className='border border-gray-200 rounded-xl text-left p-8 w-full leading-8'>

            <img src={company_logo} alt="" />
            <h2>{job_title}</h2>
            <h2><small>{company_name}</small></h2>

            <div className='flex justify-start gap-5'>
                <button className='border-teal-500 font-bold'><small>{job_type}</small></button>
                <button className='border-teal-500 font-bold'><small>{job_time}</small></button>
            </div>

            <div>
                <p><small>
                    {location}
                    <span className='ml-5'>Salary : {salary}</span>
                </small></p>
            </div>

            <button className='btn-primary'><Link to={`/job/${id}`}>View Details</Link></button>
        </div>
    );
};

export default Job;