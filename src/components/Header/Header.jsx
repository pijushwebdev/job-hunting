import React, { useState } from 'react';
import ActiveLink from '../ActiveLink/ActiveLink';
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    const [toggler,setToggler] = useState(false);

    return (
        <div className='flex justify-between items-center py-14'>
            <div>
                <h1 className='font-extrabold text-3xl'>HuntJobs</h1>
            </div>

            <div className='md:hidden' onClick={()=>setToggler(!toggler)}>
                <FontAwesomeIcon icon={faBars} style={{color: "#c51616",}} />
            </div>
            

            <div className={`${toggler ? 'top-32 left-1/3' : '-top-32 left-1/3' } md:flex justify-between absolute md:static duration-500 p-2 rounded-md md:bg-white bg-gray-500`}>
                <ActiveLink to='/'>Home</ActiveLink>
                <ActiveLink to='/statistics'>Statistics</ActiveLink>
                <ActiveLink to='/applied-jobs'>Applied Jobs</ActiveLink>
                <ActiveLink to='/blog'>Blog</ActiveLink>
            </div>

            <div>
                <button className='start-applying'>Start Applying</button>
            </div>
        </div>
    );
};

export default Header;