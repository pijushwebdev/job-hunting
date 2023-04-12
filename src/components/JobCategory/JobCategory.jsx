import React, { useEffect, useState } from 'react';
import Category from '../Category/Category';
import { useLoaderData } from 'react-router-dom';

const JobCategory = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('categories.json')
        .then(res => res.json())
        .then(data => setCategories(data.categories))
    },[])


    return (
        <div className='mb-32'>
            <h1 className='text-center font-extrabold text-5xl mb-4 mt-16'>Job Category List</h1>
            <p className='text-center text-slate-400 mb-8'>Explore thousands of
                job opportunities with all the information you need. Its your future</p>
            <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1'>
                {
                    categories.map(category => <Category
                        key={category.id}
                        category={category}></Category>)
                }
            </div>

        </div>
    );
};

export default JobCategory;