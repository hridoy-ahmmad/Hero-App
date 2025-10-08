import React from 'react';


import { NavLink, useLoaderData } from 'react-router';
import HomeReview from './HomeReview';
import AppCard from './AppCard';
import Hero from './Hero';

const Home = () => {
    const appDatum = useLoaderData()
    console.log(appDatum);

    return (
        <div className=' bg-[#d2d2d227]'>
            <Hero></Hero>
            <HomeReview></HomeReview>
            {
                appDatum.map(appData => <AppCard appData={appData}></AppCard>)
            }
        </div>

    );
};

export default Home;