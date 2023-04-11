import React from 'react';
import './Home.css'
import HomeBanner from '../HomeBanner/HomeBanner';
import JobCategory from '../JobCategory/JobCategory';
import FeaturesJobs from '../FeaturesJobs/FeaturesJobs';

const Home = () => {
    return (
        <div>
            <HomeBanner></HomeBanner>
            <JobCategory></JobCategory>
            <FeaturesJobs></FeaturesJobs>
        </div>
    );
};

export default Home;