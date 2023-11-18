import React, { useEffect, useState } from 'react';
import './Home.css'
import { useLoaderData } from 'react-router-dom';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Category from '../Category/Category';
import JobFeatures from '../JobFeatures/JobFeatures';
import { ArrowDownOnSquareStackIcon } from '@heroicons/react/24/solid'


const Home = () => {

    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch('jobCategory.json')
            .then(response => response.json())
            .then(data => setCategories(data))
    }, [])

    const features = useLoaderData();
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

            <section className='JobFeatures my-12'>
                <div>
                    <h2 className='text-xl font-bold'>Featured Jobs</h2>
                    <p><small>Explore thousands of job opportunities with all the information you need. Its your future</small></p>
                </div>

                <div className='features my-10'>
                    <div className='grid grid-cols-2 justify-items-center gap-2 my-5'>

                        {
                            features.map(feature => <JobFeatures
                                key={feature.id}
                                feature={feature}
                            ></JobFeatures>)
                        }

                    </div>

                    <button className='btn-Apply text-white font-bold'>
                        <span className='flex'>
                            View All
                            <ArrowDownOnSquareStackIcon className="h-6 w-6 text-white" />
                        </span>
                    </button>

                </div>

            </section>

            <footer >
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default Home;