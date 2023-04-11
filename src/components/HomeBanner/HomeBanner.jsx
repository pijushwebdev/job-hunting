import React from 'react';
import './HomeBanner.css'

const HomeBanner = () => {
    return (
        <div className='grid lg:grid-cols-2 grid-cols-1'>
            <div>
                <h1 className='text-7xl font-extrabold'>One Step
                 <span className='block my-3'>Closer To Your</span> 
                 <span className='block text-purple-400'>Dream Job</span></h1>
                 <p className='text-lg font-medium text-slate-400 my-6'>Explore thousands of job opportunities with all the information you need. 
                    Its your future. 
                    Come find it. Manage all your job application from start to finish.
                </p>
                <button className='get-started'>Get Started</button>
            </div>
            <div>
                <img className='' src="/hero.png" alt="" />
            </div>
        </div>
    );
};

export default HomeBanner;