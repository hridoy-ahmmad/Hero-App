import React from 'react';
import { useLoaderData } from 'react-router';
import AppData from './AppData';



const Apps = () => {
    const datum = useLoaderData()
    console.log(datum);
    


    return (

        <div>

            <div className='mt-10'>
                <h1 className='font-bold text-center text-5xl leading-20'>Trending Apps</h1>
                <p className='text-[#627382] text-[20px] text-center leading-20'>Explore All Trending Apps on the Market developed by us</p>
            </div>
             <div className='grid lg:grid-cols-4 grid-rows-2 md:grid-cols-3 max-w-[1440px] mx-auto gap-5'>
            {
                datum.map(data=><AppData data={data} ></AppData>)
            }
        </div>
        </div>
       
    );
};

export default Apps;