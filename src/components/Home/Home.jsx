import React, { useEffect, useState } from 'react';
import './Home.css'
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import JobFeatures from '../JobFeatures/JobFeatures';


const Home = () => {

    // -----------Job Categories: Data Load-------------------
    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch('jobCategory.json')
            .then(response => response.json())
            .then(data => setCategories(data))
    }, [])
// -Others----------------------
    return (
        <div className='Main-container relative'>
{/* --Banner section------------------------ */}
            <section className='banner-container'>
                <Banner></Banner>
            </section>

{/*-Job category----------------- */}
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

{/*--Job Features-------------- */}
            <section className='JobFeatures my-12'>
                <div>
                    <h2 className='text-xl font-bold'>Featured Jobs</h2>
                    <p><small>Explore thousands of job opportunities with all the information you need. Its your future</small></p>
                </div>

                <div className='features my-10'>
                    <JobFeatures></JobFeatures>
                    
                </div>
            </section>

{/*--Footer section---------------- */}
            {/* <footer >
                <Footer></Footer>
            </footer> */}
        </div>
    );
};

export default Home;