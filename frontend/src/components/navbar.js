// src/components/NavBar.js
"use client"
import Link from 'next/link';
import { useState } from 'react';
import "./navbar.css";

export function NavBarHome() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="w-full bg-gray-900 text-white py-4 shadow-lg shadow-black">
            <div className="container mx-auto flex items-center justify-between px-6 md:px-10">
                
                {/* Left - Logo */}
                <h1 className="bookish text-3xl font-bold text-green-300">Bookish Souls</h1>
                
                {/* Center - Links (Hidden on smaller screens) */}
                <div className="hidden md:flex space-x-8 text-lg">
                    <Link href="/contact" className="hover:text-neon-green transition duration-300">
                       Contact
                    </Link>
                    <Link href="/about" className="hover:text-neon-green transition duration-300">
                        About
                    </Link>
                </div>

                {/* Right - Buttons (Hidden on smaller screens) */}
                

                {/* Mobile Menu Icon */}
                <button
                    onClick={toggleMenu}
                    className="md:hidden text-neon-green focus:outline-none"
                >
                    {/* Icon */}
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                        ></path>
                    </svg>
                </button>
            </div>
            
            {/* Mobile Menu Dropdown */}
            {isOpen && (
                <div className="md:hidden px-6 pt-4 pb-2 space-y-4 text-lg bg-gray-900 text-center">
                    <Link href="/contact" className="block hover:text-neon-green transition duration-300">
                        Contact
                    </Link>
                    <Link href="/about" className="block hover:text-neon-green transition duration-300">
                        About
                    </Link>
                </div>
            )}

            {/* Neon Shadow Under Navbar */}
            <div className="absolute inset-x-0 bottom-0 h-0.5"></div>
        </nav>
    );
}
