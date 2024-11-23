"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./signup.css"

export default function SignUp() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [formVisible, setFormVisible] = useState(false);

    // Set formVisible to true once the component is mounted
    useEffect(() => {
        setFormVisible(true);
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            alert('Passwords do not match!');
            return;
        }

        const userData = { username, password, email };

        try {
            setLoading(true);
            const response = await axios.post('http://localhost:5000/signup', userData);
            setLoading(false);

            if (response.status === 201) {
                alert('Registration complete!');
            } else {
                alert('Registration failed. Please try again.');
            }
        } catch (error) {
            setLoading(false);
            console.error('Error during sign-up:', error);
            alert('An error occurred during registration. Please try again.');
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-900 via-orange-700 to-blue-900 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-900 via-orange-700 to-blue-900 animate-wave-background"></div>
            <form
                className={`signup-form bg-black bg-opacity-70 p-8 rounded-lg shadow-xl max-w-md w-full space-y-6 z-10 relative transition-opacity duration-1000 ${formVisible ? 'opacity-100' : 'opacity-0'}`}
                onSubmit={handleSubmit}
            >
                <h2 className="text-4xl font-bold text-white text-center mb-6">Sign Up</h2>
                <div>
                    <label className="block text-gray-300 text-lg text-left">Username:</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="w-full border border-gray-600 rounded-lg px-4 py-2 mt-2 text-white bg-transparent input-field"
                        required
                    />
                </div>
                <div>
                    <label className="block text-gray-300 text-lg text-left">Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full border border-gray-600 rounded-lg px-4 py-2 mt-2 text-white bg-transparent input-field"
                        required
                    />
                </div>
                <div>
                    <label className="block text-gray-300 text-lg text-left">Create a password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full border border-gray-600 rounded-lg px-4 py-2 mt-2 text-white bg-transparent input-field"
                        required
                    />
                </div>
                <div>
                    <label className="block text-gray-300 text-lg text-left">Re-enter the password to confirm:</label>
                    <input
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="w-full border border-gray-600 rounded-lg px-4 py-2 mt-2 text-white bg-transparent input-field"
                        required
                    />
                </div>
                <button
                    type="submit"
                    disabled={loading}
                    className={`w-full py-2 px-4 rounded-lg text-white ${
                        loading ? 'bg-gray-600 cursor-not-allowed' : 'bg-orange-600 hover:bg-orange-700'
                    }`}
                >
                    {loading ? (
                        <div className="flex items-center justify-center space-x-2">
                            <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white"></div>
                            <span>Signing Up...</span>
                        </div>
                    ) : (
                        'Sign Up'
                    )}
                </button>
            </form>
        </div>
    );
}