import React from 'react';
import './AppliedJob.css'
import { ChevronDoubleDownIcon } from '@heroicons/react/24/solid'


const AppliedJob = () => {
    return (
        <div className='appliedJobs-container mx-auto'>
            <div className='page-banner'>

                <h2 className='pt-32 font-bold text-2xl'> Applied Jobs</h2>
            </div>

            <button className='bg-gray-400 text-white font-bold ml-72 mb-5'>
                <span className='flex items-center gap-1'>Filter By <ChevronDoubleDownIcon className="h-4 w-4 text-white" /></span></button>
            <div className='main-content text-left flex justify-between items-center p-3'>

                <div className='flex items-center gap-5 leading-6'>
                    {/* --------img---------- */}
                    <div className='company-logo '>
                        <img src="/public/assets/logo/google.png" alt="" />
                    </div>
                    {/* -------------main-info---------- */}
                    <div className='main-info'>
                        <h2 className='font-bold'>Technical Engineer</h2>
                        <h2 className='text-gray-500 text-sm'><small>Google LLC</small></h2>

                        <div className='flex justify-start gap-5'>
                            <button className='btn-job-type border-teal-500 font-bold'><small>Remote</small></button>
                            <button className='btn-job-type border-teal-500 font-bold'><small>Full TIme</small></button>
                        </div>

                        <div>
                            <p><small>
                                Dhaka, bangladesh
                                <span className='ml-5'>Salary : 15k - 20k</span>
                            </small></p>
                        </div>
                    </div>

                </div>
                {/* -------button------- */}
                <button className='btn-primary'><small>View Details</small></button>

            </div>
        </div>
    );
};

export default AppliedJob;