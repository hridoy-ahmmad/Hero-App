import React from 'react';

const HomeReview = () => {
    return (
        <div className='max-w-7xl mx-auto text-center text-white lg:py-10'>
            <h1 className='lg:text-[48px] font-bold text-[22px] lg:py-5 py-1'>Trusted by Millions, Built for You</h1>
            <div className='p-5 lg:p-0'>
                <div className='w-50 border-2 border-white justify-center mx-auto'>
                
                </div>
            </div>
            <div className='flex justify-center pb-3'>
                <div className='lg:py-5 lg:px-20 px-2'>
                    <p className='text-[12px] lg:text-[16px] font-light'>Total Downloads</p>
                    <h1 className='lg:text-[64px] text-[16px] font-extrabold'>29.6M</h1>
                    <p className='text-[12px] lg:text-[16px] font-light'>21% more than last month</p>
                </div>
                <div className='lg:py-5 lg:px-20 px-2'>
                    <p className='text-[12px] lg:text-[16px] font-light'>Total Reviews</p>
                    <h1 className='lg:text-[64px] text-[16px] font-extrabold'>906K</h1>
                    <p className='text-[12px] lg:text-[16px] font-light'>46% more than last month</p>
                </div>
                <div className='lg:py-5 lg:px-20 px-2'>
                    <p className='text-[12px] lg:text-[16px] font-light'>Active Apps</p>
                    <h1 className='lg:text-[64px] text-[16px] font-extrabold'>132+</h1>
                    <p className='text-[12px] lg:text-[16px] font-light'>31 more will Launch</p>
                </div>
            </div>
        </div>
    );
};

export default HomeReview;