import React from 'react';
import logo from '../assets/logo.png'
import { NavLink } from 'react-router';

const Footer = () => {
    return (
        <div className=''>
            <footer className="footer sm:footer-horizontal  text-base-content p-10 max-w-7xl mx-auto">
                <aside >
                   <NavLink to={'/'}><img width={'100px'} src={logo} alt="" /></NavLink> 
                    <p className='font-extrabold'>
                        Programming Hero
                    </p>
                    <div >
                        Our mission is to provide personalized learning,
                        <br />develop skills,
                        and empower individuals to kick-start their careers.
                    </div>
                </aside>
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            
            </footer>
            <aside className='text-center border-t-1 border-[#1313131a] p-5'>
                <p className='text-[#13131394]'>Copyright © {new Date().getFullYear()} - All right reserved by Programming hero team</p>
            </aside>
        </div>
    );
};

export default Footer;