import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoIosPerson } from "react-icons/io";
import { FaLock } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";


const Signup = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        dob: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('https://admindashboardassignment.onrender.com/api/v1/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const result = await response.json();
            if (response.ok) {
                alert('User registered successfully!');
                localStorage.setItem("access_token", result.access_token);
                navigate("/dashboard");
            } else {
                alert(result.error);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="bg-gray-100 flex items-center justify-center min-h-screen bg-gradient-to-b from-sky-900 to-sky-400">
            <div className="bg-white p-8 rounded-lg shadow-md w-96">
                <h2 className="text-2xl font-bold mb-6 text-center">Signup Form</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700" htmlFor="name">Name</label>
                        <div className='flex gap-2 border-2 items-center rounded-md px-2'>
                            <IoIosPerson size={24} />
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder='Name...'
                                required
                                value={formData.name}
                                onChange={handleChange}
                                className="border-l block w-full border-gray-300  p-2 focus:outline-none focus:ring-0"
                            />
                        </div>
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700" htmlFor="dob">Date of Birth</label>
                        <input
                            type="date"
                            id="dob"
                            name="dob"
                            required
                            value={formData.dob}
                            onChange={handleChange}
                            className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700" htmlFor="email">Email</label>
                        <div className='flex gap-2 border-2 items-center rounded-md px-2'>
                            <MdEmail size={24} />
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder='Email...'
                                required
                                value={formData.email}
                                onChange={handleChange}
                                className="border-l block w-full border-gray-300  p-2 focus:outline-none focus:ring-0"
                            />
                        </div>
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700" htmlFor="password">Password</label>
                        <div className='flex gap-2 border-2 items-center rounded-md px-2'>
                            <FaLock />
                            <input
                                type="password"
                                id="password"
                                name="password"
                                placeholder='Password'
                                required
                                value={formData.password}
                                onChange={handleChange}
                                className="block w-full border-l border-gray-300  p-2 focus:outline-none  "
                            />
                        </div>
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white font-bold py-2 rounded hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300">Sign Up</button>
                </form>
                <p className="mt-4 text-center text-gray-600">
                    Already have an account? <a href="#" className="text-blue-600 hover:underline" onClick={() => navigate("/signin")}>Login</a>
                </p>
            </div>
        </div>
    );
};

export default Signup;
