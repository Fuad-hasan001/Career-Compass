import React from 'react';
import './Category.css'

const Category = ({ category }) => {
    const { title, subtitle, icon } = category
    return (
        <div className='jobCategory flex flex-col justify-center items-center'>
            <div className='icon'>
                <img src={icon} alt="" />
            </div>
            <div>
                <h3>{title}</h3>
                <p><small>{subtitle}</small></p>
            </div>
        </div>

    );
};

export default Category;