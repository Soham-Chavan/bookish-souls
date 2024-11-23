"use client"
import Link from "next/link"
import "./homeUI.css"

export default function HomeUI() {
    return (
        <div className="container-box bg-gray-900">
            <div className="signin-signup-btns">
            <div className="be-bookworm">
                <h1>"Embrace the world of books, where every page reveals a piece of magic, wisdom, or adventure—become a bookish soul, and let stories shape the way you see the world."</h1>
            </div>
                <button className="bg-transparent border border-neon-green text-neon-green py-2 px-4 rounded hover:bg-neon-green hover:text-gray-900 transition duration-300">
                    <Link href="/signin">Sign In</Link>
                </button>
                <button className="bg-neon-green text-gray-900 py-2 px-4 rounded hover:bg-transparent hover:text-neon-green border border-neon-green transition duration-300">
                    <Link href="/signup">Sign Up</Link>
                </button>
            </div>
        </div>
    )
}