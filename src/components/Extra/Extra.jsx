import React from 'react';

const Extra = () => {
    return (
       <div>
         <div>
            {/* jobFeatures------------ */}
            {/* import React from 'react';
            import {useLoaderData} from 'react-router-dom';
            import JobFeature from '../JobFeature/JobFeature';
const JobFeatures = () => {
    const features = useLoaderData()
            return (
            <div>
                <h2>Job features: {features.length}</h2>
                <div className='grid grid-cols-2 gap-5'>
                    {
                        features.map(feature => <JobFeature
                            key={feature.id}
                            feature={feature}
                        ></JobFeature>
                        )
                    }
                </div>
            </div>
            );
};

            export default JobFeatures; */}
        


        </div>


       <div>  {/*
        import React from 'react';
import './JobFeature.css'
import { Link } from 'react-router-dom';

const JobFeature = ({ feature }) => {
    // console.log(feature)
    const {id,company_logo,job_title,company_name,job_type, job_time ,location,salary } = feature

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

            <button className='btn-primary'><Link to={`jobFeature/${id}`}>View Details</Link></button>
        </div>
    );
};

export default JobFeature;*/}
        </div> 

            

         <div>
       {/* import React from 'react';
import './JobDetails.css'
import { CurrencyDollarIcon, CalendarDaysIcon, PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/solid'
import { useLoaderData } from 'react-router-dom';

const JobDetails = () => {
    const jobDetails = useLoaderData();
    console.log(jobDetails)
    return (
        <div>
            <h1 className='font-bold text-2xl'>Everything about Job Details</h1>
            
        </div>
    );
};

export default JobDetails;*/}

        </div> 

        <h2>details page css style</h2>
        <div>
 .details-container{
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 20px;
    text-align: left;
    line-height:32px;
}
.details p small{
    display: flex;
    align-items: center;
    gap: 5px;
 display: grid;
    
} 
        </div>

       </div>
    );
};

export default Extra;