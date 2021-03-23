import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className="border-t mt-32 pt-12 pb-32 px-4 lg:px-0">
            <div className="flex">

                <div className="w-full md:w-1/3 lg:w-1/4">
                    <h6 className="font-semibold text-gray-700 mb-4">Company</h6>
                    <ul>
                        <li> <Link to="/" className="block text-gray-600 py-2">Team</Link> </li>
                        <li> <Link to="/" className="block text-gray-600 py-2">About us</Link> </li>
                        <li> <Link to="/" className="block text-gray-600 py-2">Press</Link> </li>
                    </ul>
                </div>

                <div className="w-full md:w-1/3 lg:w-1/4">
                    <h6 className="font-semibold text-gray-700 mb-4">Content</h6>
                    <ul>
                        <li> <Link to="/" className="block text-gray-600 py-2">Blog</Link> </li>
                        <li> <Link to="/" className="block text-gray-600 py-2">Privacy Policy</Link> </li>
                        <li> <Link to="/" className="block text-gray-600 py-2">Terms & Conditions</Link> </li>
                        <li> <Link to="/" className="block text-gray-600 py-2">Documentation</Link> </li>
                    </ul>
                </div>

            </div>
        </footer>
    )
}

export default Footer
