import React, { useEffect, useState } from 'react';
import './FeaturesJobs.css';
import SingleJob from '../SingleJob/SingleJob';

const FeaturesJobs = () => {
    const [jobs, setJobs] = useState([]);
    const [visibleJobs, setVisibleJobs] = useState([]);
    const [showMore, setShowMore] = useState(false);

    useEffect(() => {
        fetch('jobs.json')
        .then(res => res.json())
        .then(data => {
            setJobs(data.jobs);
            setVisibleJobs(data.jobs.slice(0, 4));
        })
    },[])

    const handleShowMore = () => {
        setShowMore(true);
    }

    return (
        <div className='mb-5'>
            <h1 className='text-center font-extrabold text-5xl mb-4 mt-16'>Featured Jobs</h1>
            <p className='text-center text-slate-400 mb-8'>Explore thousands of job opportunities with all the information you need. Its your future</p>

            <div className='grid md:grid-cols-1 lg:grid-cols-2 gap-2'>
                {
                    visibleJobs.map(job => <SingleJob job={job} key={job.id}></SingleJob>)
                }
            </div>

            {!showMore && jobs.length > visibleJobs.length && (
                <button onClick={handleShowMore} className='show-all-btn mx-auto block mt-8 rounded-md border-2  py-2 px-6'>Show All Jobs</button>
            )}
            {showMore && (
                <div className='grid md:grid-cols-1 lg:grid-cols-2 gap-2'>
                    {
                        jobs.slice(4).map(job => <SingleJob job={job} key={job.id}></SingleJob>)
                    }
                </div>
            )}
        </div>
    );
};

export default FeaturesJobs;
