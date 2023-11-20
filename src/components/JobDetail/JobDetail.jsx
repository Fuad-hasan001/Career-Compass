import React from 'react';
import './JobDetail.css'
import { useLoaderData } from 'react-router-dom';
import { CurrencyDollarIcon, CalendarDaysIcon, PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/solid'


const JobDetail = () => {
    // receive data >> displayDetails >> btn-ApplyNow
    const jobDetail = useLoaderData()
    console.log(jobDetail)
    // const { job_description, job_responsibility,
    //     educational_requirement, experience,salary,job_title, Contact_info } = jobDetail;


    
    return (
        <div className='details-container'>
            <div>
                <p><small><span className='font-bold'>Job Description:</span> { jobDetail.job_description}</small></p>

                <p><small><span className='font-bold'>Job Responsibility:</span> {}</small></p>

                <div>
                    <h3 className='font-bold'>Educational Requirements:</h3>
                    <p><small>Bachelor degree to complete any reputational university.</small></p>
                </div>

                <div>
                    <h3 className='font-bold'>Experiences:</h3>
                    <p><small>2-3 Years in this field.</small></p>
                </div>
            </div>



            <div className='side details grid'>
                <div className='bg-cyan-50 rounded-3xl mb-3 p-5'>
                    <div>
                        <h3 className='font-bold'>Job Details</h3>
                        <hr />
                        <p><small>
                            <CurrencyDollarIcon className="h-4 w-4 text-purple-400" />
                            <span className='font-bold'>
                                Salary :</span> {} (Per Month)
                        </small></p>
                        <p><small>
                            <CalendarDaysIcon className="h-4 w-4 text-purple-400" />
                            <span className='font-bold'>Job Title :</span>  Product Designer
                        </small></p>
                    </div>
                    <div>
                        <h3 className='font-bold'>Contact Information</h3>
                        <hr />
                        <p><small>
                            < PhoneIcon className="h-4 w-4 text-purple-400" />
                            <span className='font-bold'>Phone :</span> 01750-00 00 00
                        </small></p>

                        <p><small>
                            <EnvelopeIcon className="h-4 w-4 text-purple-400" />
                            <span className='font-bold'>Email :</span> info@gmail.com
                        </small></p>

                        <span className='flex gap-1'>
                            <MapPinIcon className="h-8 w-5 text-purple-400" />
                            <small>
                                <span className='font-bold'>
                                    Address :</span> Dhanmondi 32, Sukrabad
                                Dhaka, Bangladesh
                            </small>
                        </span>
                    </div>
                </div>

                <button className='btn-Apply font-bold text-white'>Apply Now</button>
            </div>

        </div>

    );




};

export default JobDetail;