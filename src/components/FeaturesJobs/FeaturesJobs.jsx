import React, { useEffect, useState } from 'react';
import './FeaturesJobs.css';
import SingleJob from '../SingleJob/SingleJob';


const FeaturesJobs = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetch('jobs.json')
        .then(res => res.json())
        .then(data => setJobs(data.jobs))
    },[])
    // console.log(jobs);
    return (
        <div>
            <h1 className='text-center font-extrabold text-5xl mb-4 mt-16'>Featured Jobs</h1>
            <p className='text-center text-slate-400 mb-8'>Explore thousands of
                job opportunities with all the information you need. Its your future</p>

            <div className='grid md:grid-cols-1 lg:grid-cols-2 gap-2'>
                {
                    jobs.map(job => <SingleJob 
                        job={job} key={job.id}
                        ></SingleJob>)
                }
            </div>
        </div>
    );
};

export default FeaturesJobs;