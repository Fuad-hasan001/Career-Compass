import React, { useEffect, useState } from 'react';
import './Home.css'
import { useLoaderData } from 'react-router-dom';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Category from '../Category/Category';

const Home = () => {

    const categories = useLoaderData()
    // console.log(categories)

    // const features = useLoaderData();
    // console.log(features)

    return (
        <div className='Main-container relative'>
            <section className='banner-container'>
                <Banner></Banner>
            </section>

            <section className='JobCategory my-10 '>
                <div>
                    <h2 className='text-xl font-bold'>Job Category List</h2>
                    <p><small>Explore thousands of job opportunities with all the information you need. Its your future</small></p>
                </div>

                <div className='Category my-10'>
                    <div className='grid grid-cols-4 justify-items-center gap-5'>
                        {
                            categories.map(category => <Category
                                key={category.id}
                                category={category}
                            ></Category>)
                        }
                    </div>
                </div>
            </section>

            <section className='JobFeatures my-10 border border-red-500'>
                <div>
                    <h2 className='text-xl font-bold'>Featured Jobs</h2>
                    <p><small>Explore thousands of job opportunities with all the information you need. Its your future</small></p>
                </div>

                <div className='features'>
                    <div className='grid grid-cols-2 justify-items-center gap-3 mx-20'>
                        
                         
                        {/* <div className='jobFeature text-left'>
                            <img src="" alt="" />
                            <h2>Technical Database Engineer <br /><span></span></h2>
                            <h2><small>Google LLC</small></h2>

                            <div className='flex justify-start gap-5'>
                                <button className='border-teal-500 font-bold'><small>Remote</small></button>
                                <button className='border-teal-500 font-bold'><small>Full Time</small></button>
                            </div>

                            <div>
                                <p><small>
                                    Dhaka, Bangladesh
                                    <span>Salary : 100K - 150K</span>
                                </small></p>
                            </div>

                            <button className='btn-primary'><small>View Details</small></button>
                        </div>
                        <div className='jobFeature text-left'>
                            <img src="" alt="" />
                            <h2>Technical Database Engineer <br /><span></span></h2>
                            <h2><small>Google LLC</small></h2>

                            <div className='flex justify-start gap-5'>
                                <button className='border-teal-500 font-bold'><small>Remote</small></button>
                                <button className='border-teal-500 font-bold'><small>Full Time</small></button>
                            </div>

                            <div>
                                <p><small>
                                    Dhaka, Bangladesh
                                    <span>Salary : 100K - 150K</span>
                                </small></p>
                            </div>

                            <button className='btn-primary'><small>View Details</small></button>
                        </div>
                        <div className='jobFeature text-left'>
                            <img src="" alt="" />
                            <h2>Technical Database Engineer <br /><span></span></h2>
                            <h2><small>Google LLC</small></h2>

                            <div className='flex justify-start gap-5'>
                                <button className='border-teal-500 font-bold'><small>Remote</small></button>
                                <button className='border-teal-500 font-bold'><small>Full Time</small></button>
                            </div>

                            <div>
                                <p><small>
                                    Dhaka, Bangladesh
                                    <span>Salary : 100K - 150K</span>
                                </small></p>
                            </div>

                            <button className='btn-primary'><small>View Details</small></button>
                        </div> 
                        <div className='jobFeature text-left'>
                            <img src="" alt="" />
                            <h2>Technical Database Engineer <br /><span></span></h2>
                            <h2><small>Google LLC</small></h2>

                            <div className='flex justify-start gap-5'>
                                <button className='border-teal-500 font-bold'><small>Remote</small></button>
                                <button className='border-teal-500 font-bold'><small>Full Time</small></button>
                            </div>

                            <div>
                                <p><small>
                                    Dhaka, Bangladesh
                                    <span>Salary : 100K - 150K</span>
                                </small></p>
                            </div>

                            <button className='btn-primary'><small>View Details</small></button>
                        </div>  */}
                    </div>

                </div>

            </section>

            <footer >
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default Home;