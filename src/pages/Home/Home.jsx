import React from 'react';
import play from '../../assets/play.svg'
import appstore from '../../assets/appstore.svg'
import heroImg from '../../assets/hero.png'

import { NavLink } from 'react-router';

const Home = () => {
    return (


        <div className=' bg-[#d2d2d227]'>
            <div className='max-w-7xl mx-auto lg:pt-20 pt-5 text-center'>
                <h1 className='lg:text-[72px] md:text-[52px] text-[36px] font-bold text-center'>We Build  <br />
                    <span className='text-transparent bg-clip-text bg-gradient-to-br from-[#632EE3] to-[#9F62F2] lg:mr-4'>Productive</span>Apps</h1>
                <p className='lg:px-50 px-6 text-[#627382] text-[16px]'>AtHERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
                <div className='flex gap-5 justify-center mt-8'>
                    <NavLink to={'https://play.google.com/store/games?hl=en'} target='_blank' className="btn py-4 px-7 ">
                        <img width={'26px'} src={play} alt="" />
                        Google Play</NavLink>
                    <NavLink to={'https://www.apple.com/app-store/'} target='_blank' className="btn py-4 px-7">
                        <img width={'26px'} src={appstore} alt="" />
                        App Store</NavLink>
                </div>
                <div className='justify-center flex mt-10 p-4 lg:p-0'>
                    <img src={heroImg} alt="Hero Image" />
                </div>
            </div>
        </div>
    );
};

export default Home;