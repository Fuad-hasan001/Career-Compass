import React from 'react';
import './Home.css'
import { useLoaderData } from 'react-router-dom';
import Category from '../Category/Category';
import JobFeatures from '../JobFeatures/JobFeatures';

const Home = () => {
    const jobCategories = useLoaderData();
    console.log(jobCategories)
    return (
        <div>
            <section className='banner-container grid grid-cols-2 items-center mx-10 my-10 border border-red-500 '>
                <div className='text-left'>
                    <h1 className='text-6xl text-black mb-2'>One Step Closer To Your <span >Dream Job</span></h1>
                    <p className='font-bold mb-5'><small>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</small></p>
                    <button className='btn-primary text-white font-bold'>Get Started</button>
                </div>

                <div>
                    <img src="/src/assets/images/user.png" alt="" />
                </div>
            </section>
        </div>
    );
};

export default Home;