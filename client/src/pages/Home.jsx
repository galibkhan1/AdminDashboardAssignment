// Home.js
import React from 'react';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="bg-gray-100 min-h-screen bg-gradient-to-b from-sky-900 to-sky-400">
            <Navbar />
            <div className="flex items-center justify-center min-h-screen">
                <div className="bg-white p-8 rounded-lg shadow-md w-96 text-center">
                    <h1 className="text-3xl font-bold mb-4">Welcome to MyApp</h1>
                    <p className="text-gray-600 mb-6">
                        This is the homepage. Please sign in or sign up to continue.
                    </p>
                    <p>
                        <Link to="/signin" className="text-blue-600 hover:underline mx-2">Sign In</Link>
                        or
                        <Link to="/signup" className="text-blue-600 hover:underline mx-2">Sign Up</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Home;
