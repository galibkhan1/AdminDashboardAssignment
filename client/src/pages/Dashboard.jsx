import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Dashboard = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const navigate = useNavigate(); // Initialize useNavigate

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const token = localStorage.getItem('access_token');
                const response = await axios.get('http://localhost:8000/api/v1/getallusers', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });

                if (response.status !== 200) {
                    throw new Error('Failed to fetch users'); // Throw an error if the response is not 200
                }

                const data = response.data; // No need to await here
                setUsers(data.users); // Assuming the data is an array of users
            } catch (err) {
                setError(err.message);
                navigate('/signin'); // Redirect to /signin on error
            } finally {
                setLoading(false);
            }
        };

        fetchUsers();
    }, [navigate]); // Add navigate to dependencies

    const handleRetry = () => {
        setError('');
        setLoading(true);
        fetchUsers(); // Retry fetching users
    };

    const logoutHandler=()=>{
        localStorage.clear();
        navigate("/signin")
    }

    if (loading) {
        return <div className="text-center">Loading...</div>;
    }

    if (error) {
        return (
            <div className="text-center text-red-500">
                {error} <button onClick={handleRetry}>Retry</button>
            </div>
        );
    }

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <div className='w-full flex justify-end'><button className='p-2 px-6 hover:text-white hover:bg-black rounded-md border-black border-2' onClick={logoutHandler}>Logout</button></div>
            <h1 className="text-2xl font-bold mb-6 text-center">Admin Dashboard</h1>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200">
                    <thead>
                        <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                            <th className="py-3 px-6 text-left">Name</th>
                            <th className="py-3 px-6 text-left">Email</th>
                            <th className="py-3 px-6 text-left">Date of Birth</th>
                            {/* Removed password for security */}
                        </tr>
                    </thead>
                    <tbody className="text-gray-600 text-sm font-light">
                        {users.map((user) => (
                            <tr key={user._id} className="border-b border-gray-200 hover:bg-gray-100">
                                <td className="py-3 px-6">{user.name}</td>
                                <td className="py-3 px-6">{user.email}</td>
                                <td className="py-3 px-6">{new Date(user.dob).toLocaleDateString()}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Dashboard;
