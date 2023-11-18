import React from 'react';
import './JobDetails.css'
import { CurrencyDollarIcon, CalendarDaysIcon, PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/solid'

const JobDetails = () => {
    return (

        <div>
            <h1 className='font-bold text-2xl'>Job Details</h1>

            <div className='details-container my-10'>
                <div >
                    <div>
                        <p><small><span className='font-bold'>Job Description:</span> A UI/UX (User Interface/User Experience) designer is responsible for designing and creating engaging and effective interfaces for software and web applications. This includes designing the layout, visual design, and interactivity of the user interface.</small></p>

                        <p><small><span className='font-bold'>Job Responsibility:</span> Collaborating with cross-functional teams: UI/UX designers often work closely with other teams, including product management, engineering, and marketing, to ensure that the user interface is aligned with business and technical requirements. You will need to be able to effectively communicate your design ideas and gather feedback from other team members.</small></p>

                        <div>
                            <h3 className='font-bold'>Educational Requirements:</h3>
                            <p><small>Bachelor degree to complete any reputational university.</small></p>
                        </div>

                        <div>
                            <h3 className='font-bold'>Experiences:</h3>
                            <p><small>2-3 Years in this field.</small></p>
                        </div>
                    </div>
                </div>

                <div className='details grid'>
                    <div className='bg-cyan-50 rounded-3xl mb-3 p-5'>
                        <div>
                            <h3 className='font-bold'>Job Details</h3>
                            <hr />

                            <p><small>
                                <CurrencyDollarIcon className="h-4 w-4 text-purple-400" />
                                <span className='font-bold'>
                                    Salary :</span> 100K - 150K (Per Month)
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
        </div>
    );
};

export default JobDetails;