import React, { useEffect, useState } from 'react';
import './DetailsJob.css';
import DetailsJobBanner from '../DetailsJobBanner/DetailsJobBanner';
import { useLoaderData, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays, faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';


const DetailsJob = () => {

    const { id } = useParams();
    // console.log(id);
    const jobsObj = useLoaderData();
    const jobs = jobsObj.jobs;


    const [jobDetails, setJobDetails] = useState([]);

    useEffect(() => {
        const job = jobs.find(job => job.id == id);
        console.log(job);
        setJobDetails(job);

    }, [jobs, id])

    if (!jobDetails) {
        return <div>Loading...</div>
    }


    return (
        <div>
            <DetailsJobBanner></DetailsJobBanner>

            <div className='grid lg:grid-cols-12 grid-cols-1'>
                <div className='col-span-8 mr-2'>
                    <h2><span className='block font-bold text-xl'>Job Description:</span> <span className='text-slate-400'>{jobDetails.job_description}</span></h2>

                    <h2><span className='block font-bold text-xl'>Job Responsibility:</span> <span className='text-slate-400'>{jobDetails.job_responsibility}</span></h2>

                    <h2><span className='block font-bold text-xl'>Educational Requirements:</span> <span className='text-slate-400'>{jobDetails.educational_requirements}</span></h2>

                    <h2><span className='block font-bold text-xl'>Experiences:</span> <span className='text-slate-400'>{jobDetails.experiences}</span></h2>


                </div>

                <div className='col-span-4 p-2 job-detail'>
                    <h2 className='pb-3 border-b text-xl font-bold'>Job Details</h2>

                    <p className=''> <span className='mr-2'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 inline-block">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    </span> <span className='font-bold'>Salary:</span> <span className='text-slate-400'>{jobDetails.salary}(Per Month)</span>
                    </p>

                    <h2><span className='mr-2'><FontAwesomeIcon icon={faCalendarDays} style={{color: "#8896af",}} /></span> <span className='font-bold'>Job Title:</span> <span className='text-slate-400'>{jobDetails.job_title}</span></h2>
                    
                    <h1 className='pb-3 border-b text-xl font-bold'>Contact Information</h1>

                    <h2><span className='mr-2'><FontAwesomeIcon icon={faPhone} style={{color: "#7d8087",}} /></span><span className='font-bold'>Phone:</span> <span className='text-slate-400'>{jobDetails.contact_information?.phone}</span></h2>

                    <h2><span className='mr-2'><FontAwesomeIcon icon={faEnvelope} style={{color: "#8b8c8d",}} /></span><span className='font-bold'>Email:</span> <span className='text-slate-400'>{jobDetails.contact_information?.email}</span></h2>

                    <h2><span className='mr-2'><FontAwesomeIcon icon={faLocationDot} style={{color: "#808185",}} /></span><span className='font-bold'>Address:</span> <span className='text-slate-400'>{jobDetails.location}</span></h2>
                
                    <button className='applyNow'>Apply Now</button>


                </div>
            </div>
        </div>
    );
};

export default DetailsJob;