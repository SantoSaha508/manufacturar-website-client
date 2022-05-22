import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const manuItems = <>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/myportfolio">My Portfolio</Link></li>
        <li><Link to="/login">Login</Link></li>
    </>
    return (
        <div className="navbar bg-pink-600 text-white">
            <div className="navbar-start mx-auto">
                <div className="dropdown">
                    <label tabindex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-black">
                        {manuItems}
                    </ul>
                </div>
                <Link to="/home" className="btn btn-ghost normal-case text-3xl text-white font-bold ">Colors Paint</Link>
            </div>
            <div className="navbar-center hidden lg:flex mx-auto">
                <ul className="menu menu-horizontal p-0">
                    {manuItems}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;