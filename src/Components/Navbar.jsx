import React, { useState } from 'react';
import { NavLink } from 'react-router';
import logo from '../assets/logo.png'

const Navbar = () => {


    return (
        <div className="navbar bg-base-100 max-w-7xl mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="flex flex-col pr-8 dropdown-content bg-base-100 rounded-box z-1 mt-3  p-2 shadow font-medium  ">
                        <NavLink to={'/'} className={({ isActive }) => isActive ? 'text-transparent bg-clip-text bg-gradient-to-br from-[#632EE3] to-[#9F62F2] border-b-2 border-[#9F62F2]   ' : 'text-black '}>Home</NavLink>
                        <NavLink to={'/apps'} className={({ isActive }) => isActive ? 'text-transparent bg-clip-text bg-gradient-to-br from-[#632EE3] to-[#9F62F2] border-b-2 border-[#9F62F2]' : 'text-black '}>Apps</NavLink>
                        <NavLink to={'/installation'} className={({ isActive }) => isActive ? 'text-transparent bg-clip-text bg-gradient-to-br from-[#632EE3] to-[#9F62F2] border-b-2 border-[#9F62F2]' : 'text-black '}>Installation</NavLink>
                    </ul>
                </div>
                <NavLink className=" flex items-center gap-1 text-[16px] ">
                    <img width={'40px'} src={logo} alt="Logo" />
                    <span className='font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-[#632EE3] to-[#9F62F2] '>Hero.IO</span>
                </NavLink>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 flex gap-4  text-[16px] font-bold ">
                    <NavLink to={'/'} className={({ isActive }) => isActive ? 'text-transparent bg-clip-text bg-gradient-to-br from-[#632EE3] to-[#9F62F2] border-b-2 border-[#9F62F2]' : 'text-black '}>Home</NavLink>
                    <NavLink to={'/apps'} className={({ isActive }) => isActive ? 'text-transparent bg-clip-text bg-gradient-to-br from-[#632EE3] to-[#9F62F2] border-b-2 border-[#9F62F2]' : 'text-black '}>Apps</NavLink>
                    <NavLink to={'/installation'} className={({ isActive }) => isActive ? 'text-transparent bg-clip-text bg-gradient-to-br from-[#632EE3] to-[#9F62F2] border-b-2 border-[#9F62F2]' : 'text-black '}>Installation</NavLink>
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Button</a>
            </div>
        </div>
    );
};

export default Navbar;