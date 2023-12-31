import React from 'react';
import './SingleJob.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


const SingleJob = ({ job }) => {
    const { job_title, company_logo, company_name, fulltime_or_parttime, location, remote_or_onsite, salary,id } = job;

    return (
        <div className='p-10 shadow-md rounded-md single-job'>
            <div className='h-10 mb-3'>
                <img className='h-full w-auto' src={company_logo} alt="" />
            </div>
            <h2 className='text-2xl font-extrabold'>{job_title}</h2>
            <p className='my-2 text-lg text-gray-500 font-semibold'>{company_name}</p>
            
            <h6 className='my-3'><span className='mr-4 border font-bold py-1 px-4 rounded-md text-purple-600'>{remote_or_onsite}</span>  <span className='border font-bold py-1 px-4 rounded-md text-purple-600'>{fulltime_or_parttime}</span></h6>


            <p className=''><span className='mr-2'><FontAwesomeIcon icon={faLocationDot} style={{ color: "#8391aa", }} /></span> <span className='mr-4'>{location}</span> <span className='mr-2'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 inline-block">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            </span> <span>Salary: {salary}</span></p>

            <Link to={`/details/${id}`}>
                <button className='view-details'>View Details</button>
            </Link>
            

        </div>
    );
};

export default SingleJob;