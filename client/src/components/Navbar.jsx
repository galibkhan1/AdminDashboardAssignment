// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-white shadow-md">
            <div className="max-w-6xl mx-auto px-4 py-2 flex justify-between items-center">
                <div className="text-xl font-bold">MyApp</div>
                <div>
                    <Link to="/signin" className="text-blue-600 hover:underline mx-2">Sign In</Link>
                    <Link to="/signup" className="text-blue-600 hover:underline mx-2">Sign Up</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
