import React from 'react'
import { Link } from 'react-router-dom'
import { useStateValue } from '../state/provider';

const Navbar = () => {
    const [{ profile }, { }] = useStateValue();
    const logoutUser= ()=>{
        window.localStorage.clear()
        window.location.href = "/login"
    }
    return (
        <>
            <header className="flex items-center justify-between py-2 border-b">
                <Link to="/" className="px-2 lg:px-0 uppercase font-bold text-purple-800">
                    LOGO
                </Link>
                <ul className="inline-flex items-center">
                    <li className="px-2 md:px-4">
                        <Link to="/" className="text-purple-600 font-semibold hover:text-purple-500"> Home </Link>
                    </li>
                    {
                        profile !== null ? (
                            <>
                                <li className="px-2 md:px-4">
                                    <Link to="/profile" className="text-gray-500 font-semibold hover:text-purple-500"> Profile </Link>
                                </li>
                                <li className="px-2 md:px-4">
                                    <Link to="/newpost" className="text-gray-500 font-semibold hover:text-purple-500"> New Post </Link>
                                </li>
                                <li className="px-2 md:px-4">
                                    {/* <Button onClick={logoutUser} className="text-gray-500 font-semibold hover:text-purple-500"> Logout </Button> */}
                                    <button type="button" onClick={logoutUser} className="text-gray-500 font-semibold hover:text-purple-500">Logout</button>
                                </li>
                            </>
                        ) : (
                            <>
                                <li className="px-2 md:px-4">
                                    <Link to="/login" className="text-gray-500 font-semibold hover:text-purple-500"> Login </Link>
                                </li>
                                <li className="px-2 md:px-4 hidden md:block">
                                    <Link to="/register" className="text-gray-500 font-semibold hover:text-purple-500"> Register </Link>
                                </li>
                            </>

                        )
                    }

                </ul>

            </header>
        </>
    )
}

export default Navbar
