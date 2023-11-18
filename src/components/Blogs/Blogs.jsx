import React, { useEffect, useState } from 'react';
import './Blogs.css'

const Blogs = () => {
    const [blogs, setBlogs] = useState([])
    useEffect(()=>{
        fetch('blogs.json')
        .then(response => response.json())
        .then(data => setBlogs(data))
    },[])
    return (
        <div className='my-10 blog grid grid-cols-2 justify-items-center gap-10 '>
            {
                blogs.map(blog => <article 
                key={blog.id} 
                className='border border-cyan-600 rounded-lg p-10'>
                    <h2 className='text-blue-600 font-bold '>{blog.title}</h2>
                    <p className='text-gray-500 pl-3'>{blog.body}</p>
                </article>)
            }
        </div>
    );
};

export default Blogs;
