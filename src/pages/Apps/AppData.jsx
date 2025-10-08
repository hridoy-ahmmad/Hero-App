import React from 'react';
import download from '../../assets/download.svg';
import star from '../../assets/star.svg';

const AppData = ({data}) => {
    console.log(data);
    const { downloads, ratingAvg, image, useCase, title } = data
    
    return (
        <div className='bg-white rounded-sm p-4'>
                    <img className='h-[316px] mx-auto w-[316px] rounded-xl' src={image} alt="" />
                    <div className='py-5'>
                        <p className='text-[20px]  font-medium'>
                            {
                                title
                            }:
                            {
                                useCase
                            }
                        </p>
                    </div>
                    <div className='flex justify-between'>
        
                        <button className='flex text-[16px] font-semibold text-[#00D390] bg-[#04ffbc10]  rounded-sm px-5 pr-8 py-2'>
                            <img className='mr-2 p-0' height={'16px'} width={'16px'} src={download} alt="" />
                            {
                                downloads
                            }
                        </button>
                        <button className='flex text-[16px] font-semibold text-[#FF8811] bg-[#ff881117]  rounded-sm px-5 pr-8 py-2'>
                            <img className='mr-2 p-0' height={'16px'} width={'16px'} src={star} alt="" />
                            {
                                ratingAvg
                            }
                        </button>
        
                    </div>
                </div>
    );
};

export default AppData;