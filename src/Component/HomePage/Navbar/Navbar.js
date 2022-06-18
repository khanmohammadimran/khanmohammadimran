import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'

const Navbar = () => {
    const menuItems = <>
        <motion.li whileHover={{ scale: 1.2, fontWeight: 'bold' }}><a href="#home">Home</a></motion.li>
        <motion.li whileHover={{ scale: 1.2, fontWeight: 'bold' }}><a href="#myportfolio">About Me</a></motion.li>
        <motion.li whileHover={{ scale: 1.2, fontWeight: 'bold' }}><a href="#contact">Contact</a></motion.li>
        {/* <motion.li whileHover={{ scale: 1.2, fontWeight: 'bold' }}><a href="/blog">Blog</a></motion.li> */}
        <motion.li whileHover={{ scale: 1.2, fontWeight: 'bold' }}><Link to="/blog">Blog</Link></motion.li>

    </>
    return (
        <div className="navbar bg-base-100 sticky top-0 z-50 lg:w-11/12 mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 font-nunito">
                        {menuItems}
                    </ul>
                </div>
                <motion.span whileHover={{ scale: 1.1 }}><Link to='/' className="font-bold normal-case text-4xl font-rancho text-primary whitespace-nowrap">Khan Mohammad Imran</Link></motion.span>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0 font-nunito">
                    {menuItems}
                </ul>
            </div>
            <div className="navbar-end">
                <motion.a className='uppercase bg-accent p-3 rounded-lg text-white font-nunito invisible md:visible lg:visible' whileHover={{ scale: 1.1 }} href="mailto:khanmohammadimran.i31@gmail.com">Hire Me</motion.a>
            </div>
        </div>
    );
};

export default Navbar;