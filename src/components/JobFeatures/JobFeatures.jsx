import React, { useEffect, useState } from 'react';
import { ArrowDownOnSquareStackIcon } from '@heroicons/react/24/solid'
import Job from '../Job/Job';
import { useLoaderData } from 'react-router-dom';


const JobFeatures = () => {
    // loadData >> heading >> map-job >> btn-viewAll

    const [features, setFeatures] = useState([])

    const [data, setData] = useState(4)
    useEffect(() => {
        fetch('job.json')
            .then(response => response.json())
            .then(data => setFeatures(data))
    }, [])

    return (
        <div>
            <div className='grid grid-cols-2 gap-5'>
                {
                    features.slice(0, data).map(job => <Job
                        key={job.id}
                        job={job}>
                    </Job>)
                }
            </div>

            <div className={data.length === features.length ? 'hidden' : ''}>
                <button onClick={() => setData(features.length)} className='btn-Apply text-white font-bold'>
                    <span className='flex'>
                        View All
                        <ArrowDownOnSquareStackIcon className="h-6 w-6 text-white" />
                    </span>
                </button>
            </div>
        </div>
    );
};

export default JobFeatures;