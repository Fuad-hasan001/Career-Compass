import React from 'react';
import './JobFeatures.css'

const JobFeatures = ({ feature }) => {
    const {id,company_logo,job_title,company_name,remote,location,salary } = feature
    return (
        <div className='border border-gray-200 rounded-xl text-left p-8 w-full leading-8'>

            <img src={company_logo} alt="" />
            <h2>{job_title}</h2>
            <h2><small>{company_name}</small></h2>

            <div className='flex justify-start gap-5'>
                <button className='border-teal-500 font-bold'><small>Remote</small></button>
                <button className='border-teal-500 font-bold'><small>Full Time</small></button>
            </div>

            <div>
                <p><small>
                    {location}
                    <span>Salary : {salary}</span>
                </small></p>
            </div>

            <button className='btn-primary'><small>View Details</small></button>
        </div>
    );
};

export default JobFeatures;