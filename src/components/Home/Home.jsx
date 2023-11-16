import React, { useState } from 'react';
import './Home.css'
import { useLoaderData } from 'react-router-dom';
import Banner from '../Banner/Banner';
import JobFeatures from '../JobFeatures/JobFeatures';
import Footer from '../Footer/Footer';
import Category from '../Category/Category';

const Home = () => {
    
    const categories = useLoaderData()
    // console.log(categories)


    return (
        <div className='Main-container relative'>
            <section className='banner-container'>
                <Banner></Banner>
            </section>

            <section className='JobCategory my-10'>
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

            <section className='JobFeatures my-10'>
                <div>
                    <h2 className='text-xl font-bold'>Featured Jobs</h2>
                    <p><small>Explore thousands of job opportunities with all the information you need. Its your future</small></p>
                </div>

                <div className='my-10 '>
                    <JobFeatures></JobFeatures>
                </div>
            </section>

            <footer >
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default Home;