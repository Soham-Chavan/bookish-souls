"use client";
import React, { useState } from 'react';
import { useMutation } from '@tanstack/react-query';

export default function SignUp() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    // Mutation to handle sign-up
    const mutation = useMutation(async (userData) => {
        const response = await fetch('http://localhost:5000/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        });
        if (!response.ok) throw new Error('Sign-up failed');
        return response.json();
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        // Check if passwords match
        if (password !== confirmPassword) {
            alert('Passwords do not match!');
            return;
        }

        // Data to send
        const userData = { username, password };

        // Trigger mutation
        mutation.mutate(userData, {
            onSuccess: () => {
                alert('Registration complete!');
            },
            onError: (error) => {
                console.error('Error during sign-up:', error);
                alert('An error occurred during registration. Please try again.');
            },
        });
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <form
                className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full space-y-6"
                onSubmit={handleSubmit}
            >
                <h2 className="text-2xl font-bold text-gray-800 text-center">Sign Up</h2>
                <div>
                    <label className="block text-gray-700">Username:</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="w-full border border-gray-300 rounded-lg px-4 py-2 mt-1"
                        required
                    />
                </div>
                <div>
                    <label className="block text-gray-700">Create a password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full border border-gray-300 rounded-lg px-4 py-2 mt-1"
                        required
                    />
                </div>
                <div>
                    <label className="block text-gray-700">Re-enter the password to confirm:</label>
                    <input
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="w-full border border-gray-300 rounded-lg px-4 py-2 mt-1"
                        required
                    />
                </div>
                <button
                    type="submit"
                    disabled={mutation.isLoading}
                    className={`w-full py-2 px-4 rounded-lg text-white ${
                        mutation.isLoading
                            ? 'bg-gray-400 cursor-not-allowed'
                            : 'bg-blue-500 hover:bg-blue-600'
                    }`}
                >
                    {mutation.isLoading ? (
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
