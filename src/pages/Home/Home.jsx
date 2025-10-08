import React from 'react';


import { NavLink, useLoaderData } from 'react-router';
import HomeReview from './HomeReview';
import AppCard from './AppCard';
import Hero from './Hero';

const Home = () => {
    const appDatum = useLoaderData()
    console.log(appDatum);

    return (
        <div className=' bg-[#0000000e] pb-10'>
            <Hero></Hero>
            <HomeReview></HomeReview>
            <div className='mt-10'>
                <h1 className='font-bold text-center text-5xl leading-20'>Trending Apps</h1>
                <p className='text-[#627382] text-[20px] text-center leading-20'>Explore All Trending Apps on the Market developed by us</p>
            </div>
            <div className='grid lg:grid-cols-4 grid-rows-2 md:grid-cols-3 max-w-[1440px] mx-auto gap-5 '>
                {
                    appDatum.slice(0, 8).map(appData => <AppCard key={appData.id} appData={appData}></AppCard>)
                }

            </div>
            <NavLink to={'/apps'}><button className="bg-gradient-to-br from-[#632EE3] to-[#9F62F2] text-white flex items-center mx-auto m-10 gap-2 py-3 px-4 rounded-sm font-bold">
               Show All
            </button></NavLink>
            
        </div>

    );
};

export default Home;