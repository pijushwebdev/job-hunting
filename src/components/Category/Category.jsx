import React from 'react';
import './Category.css'

const Category = ({category}) => {
    const {logo,jobs_available,name} = category;

    return (
        <div className='mx-3 p-10 category-cart'>
            <div className='w-16 p-3 image-container'>
                <img className='w-full' src={logo} alt="" />
            </div>
            

            <h4 className='text-xl font-extrabold my-2'>{name}</h4>

            <p>{jobs_available}</p>

        </div>
    );
};

export default Category;