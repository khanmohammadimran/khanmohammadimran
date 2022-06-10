import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const menuItems = <>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/service">Service</Link></li>
        <li><Link to="/aboutme">About Me</Link></li>
        <li><Link to="/contact">Contact</Link></li>
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 font-nunito">
                        {menuItems}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-4xl font-rancho text-primary">Khan Mohammad Imran</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0 font-nunito">
                    {menuItems}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn bg-accent text-white border-0 invisible md:visible lg:visible">Hire Me</a>
            </div>
        </div>
    );
};

export default Navbar;