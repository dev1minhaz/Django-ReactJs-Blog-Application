import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Axios from 'axios';
import { domain } from '../env';
import { Image } from 'semantic-ui-react'
import Posts from './Posts';
import axios from 'axios';
import LatestPost from './LatestPost';
import Footer from './Footer';


const Home = () => {
    document.title = 'Home'
    return (
        <div>
            <main className="mt-10">
                <div className="block md:flex md:space-x-2 px-2 lg:p-0">
                    
                    <LatestPost />

                    <Link className="w-full md:w-1/3 relative rounded my-style-1" to="/" >
                        <div className="absolute left-0 top-0 w-full h-full z-10 my-style-2"></div>
                        <img src="https://images.unsplash.com/photo-1543362906-acfc16c67564?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1301&q=80" className="absolute left-0 top-0 w-full h-full rounded z-0 object-cover" />
                        <div className="p-4 absolute bottom-0 m left-0 z-20">
                            <span className="px-4 py-1 bg-black text-gray-200 inline-flex items-center justify-center mb-2">Science</span>
                            <h2 className="text-3xl font-semibold text-gray-100 leading-tight">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h2>
                            <div className="flex mt-3">
                                <img src="https://images-na.ssl-images-amazon.com/images/M/MV5BODFjZTkwMjItYzRhMS00OWYxLWI3YTUtNWIzOWQ4Yjg4NGZiXkEyXkFqcGdeQXVyMTQ0ODAxNzE@._V1_UX172_CR0,0,172,256_AL_.jpg" className="h-10 w-10 rounded-full mr-2 object-cover" />
                                <div>
                                    <p className="font-semibold text-gray-200 text-sm"> Chrishell Staus </p>
                                    <p className="font-semibold text-gray-400 text-xs"> 15 Aug </p>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>

                <div className="block lg:flex lg:space-x-2 px-2 lg:p-0 mt-10 mb-10">
                    <Posts />
                    <div className="w-full lg:w-1/3 px-3">

                        <div className="mb-4">
                            <h5 className="font-bold text-lg uppercase text-gray-700 px-1 mb-2"> Popular Topics </h5>
                            <ul>
                                <li className="px-1 py-4 border-b border-t border-white hover:border-gray-200 transition duration-300">
                                    <Link to="/" className="flex items-center text-gray-600 cursor-pointer">
                                        <span className="inline-block h-4 w-4 bg-green-300 mr-3"></span>
                                            Nutrition
                                        <span className="text-gray-500 ml-auto">23 articles</span>
                                        <i className='text-gray-500 bx bx-right-arrow-alt ml-1'></i>
                                    </Link>
                                </li>
                                <li className="px-1 py-4 border-b border-t border-white hover:border-gray-200 transition duration-300">
                                    <Link to="/" className="flex items-center text-gray-600 cursor-pointer">
                                        <span className="inline-block h-4 w-4 bg-indigo-300 mr-3"></span>
                                            Food & Diet
                                        <span className="text-gray-500 ml-auto">18 articles</span>
                                        <i className='text-gray-500 bx bx-right-arrow-alt ml-1'></i>
                                    </Link>
                                </li>
                                <li className="px-1 py-4 border-b border-t border-white hover:border-gray-200 transition duration-300">
                                    <Link to="/" className="flex items-center text-gray-600 cursor-pointer">
                                        <span className="inline-block h-4 w-4 bg-yellow-300 mr-3"></span>
                                            Workouts
                                        <span className="text-gray-500 ml-auto">34 articles</span>
                                        <i className='text-gray-500 bx bx-right-arrow-alt ml-1'></i>
                                    </Link>
                                </li>
                                <li className="px-1 py-4 border-b border-t border-white hover:border-gray-200 transition duration-300">
                                    <Link to="/" className="flex items-center text-gray-600 cursor-pointer">
                                        <span className="inline-block h-4 w-4 bg-blue-300 mr-3"></span>
                                            Immunity
                                        <span className="text-gray-500 ml-auto">9 articles</span>
                                        <i className='text-gray-500 bx bx-right-arrow-alt ml-1'></i>
                                    </Link>
                                </li>
                            </ul>
                        </div>


                        <div className="border border-dotted"></div>


                        <div className="p-1 mt-4 mb-4">
                            <h5 className="font-bold text-lg uppercase text-gray-700 mb-2"> Subscribe </h5>
                            <p className="text-gray-600">
                                Subscribe to our newsletter. We deliver the best health related articles to your inbox
                            </p>
                            <input placeholder="your email address" className="text-gray-700 bg-gray-100 rounded-t hover:outline-none p-2 w-full mt-4 border" />
                            <button className="px-4 py-2 bg-indigo-600 text-gray-200 rounded-b w-full capitalize tracking-wide">
                                Subscribe
                            </button>
                        </div>


                        <div className="border border-dotted"></div>

                    </div>

                </div >
            </main >
            <Footer />
        </div >
    )
}

export default Home
