import React, { useEffect, useState } from 'react';
import './AppliedJobs.css'
import { useLoaderData } from 'react-router-dom';
import { getShoppingCart } from '../../utilities/fakeDb';
import ShowAppliedJob from '../ShowAppliedJob/ShowAppliedJob';
import AppliedJobBanner from '../AppliedJobBanner';

const AppliedJobs = () => {

    const applyDataObj = useLoaderData();
    const applyData = applyDataObj.jobs;
    const [applyJob, setApplyJob] = useState(applyData);
    const [filters, setFilter] = useState([]);

    useEffect(() => {
        const storeJob = getShoppingCart();
        const savedJob = [];

        for (const id in storeJob) {
            const addJob = applyJob.find(item => item.id === id);
            if (addJob) {
                savedJob.push(addJob);
            }
        }
        setApplyJob(savedJob);
        setFilter(savedJob);

    }, []);

    const handleRemote = (jobTime) => {
        const remoteJobs = filters.filter(rJob => rJob.remote_or_onsite === jobTime);
        setApplyJob(remoteJobs);

    }

    const handleAll = () => {
        setApplyJob(filters);

    }

    return (
        <div>
            <AppliedJobBanner></AppliedJobBanner>



            <div className='mb-5'>
                <select
                    className='shadow-md border py-1 px-2 rounded-md'
                    name="filter"
                    id="filter"
                    onChange={(e) => {
                        if (e.target.value === 'Remote') {
                            handleRemote('Remote');
                        } else {
                            handleAll();
                        }
                    }}
                >
                    <option value="all">All</option>
                    <option value="Remote">Remote</option>
                </select>
            </div>


            {
                applyJob.map(job => <ShowAppliedJob
                    job={job}
                    key={job.id}
                ></ShowAppliedJob>)
            }

        </div>
    );
};

export default AppliedJobs;