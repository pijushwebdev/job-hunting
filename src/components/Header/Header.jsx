import React from 'react';
import ActiveLink from '../ActiveLink/ActiveLink';
import './Header.css'

const Header = () => {
    return (
        <div className='flex justify-between items-center py-14'>
            <div>
                <h1 className='font-extrabold text-3xl'>HuntJobs</h1>
            </div>

            <div className='flex justify-between'>
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