import React from 'react'
import BGImage from '../assets/autonomous_robot.webp'
import Navbar from './Navbar'

const LandingPage = () => {
    return (
        <>
            {/* <div className='z-10'>
                <Navbar></Navbar>
            </div> */}

            <div class="flex flex-wrap max-w-full justify-center content-center z-10">
                <div class="flex flex-wrap lg:items-baseline min-h-screen overflow-auto">
                    <div class=" relative flex flex-col max-w-fit justify-center">
                        {/* <img src="https://images.unsplash.com/photo-1625838144804-300f3907c110?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" class="object-contain max-w-full "/> */}
                        <img src={BGImage} className="object-none w-full" style={{ backgroundSize: 'contain', width: '100vw', height: '100vh' }} />
                        <div class="absolute inset-0 bg-black opacity-65"></div>
                        <div class="absolute flex md:flex-row flex-col justify-start">
                            <span className='md:text-6xl text-3xl text-white font-bold break-words md:px-48 px-10 md:py-48 pt-[130%] -p-12'>
                                AIR: Revolutionising Media Panel <br></br>Inspections in Mining Industries<br></br>
                                <span className='text-2xl text-white font-medium break-words pr-16'>
                                    Enhancing safety and efficiency with cutting-edge technology<br></br>
                                </span>
                            </span>
                            <div className='flex flex-row justify-center text-gray-50 text-3xl'>
                                <div className="min-h-screen flex items-center pr-10 pl-5 justify-center bg-transparent">
                                    <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
                                        {/* Title */}
                                        <h2 className="text-2xl font-bold text-gray-800 text-center">Login</h2>
                                        <p className="text-sm text-gray-600 text-center mt-2">
                                            Welcome back! Please enter your details to log in.
                                        </p>

                                        {/* Form */}
                                        <form className="mt-6 space-y-4">
                                            {/* Email Field */}
                                            <div className="relative">
                                                <label htmlFor="email" className="sr-only">
                                                    Email Address
                                                </label>
                                                <div className="flex items-center border rounded-lg px-3 py-2 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:border-indigo-500">
                                                    {/* <span className="material-icons text-gray-400 mr-2">email</span> */}
                                                    <input
                                                        type="email"
                                                        id="email"
                                                        placeholder="Email Address"
                                                        className="w-full outline-none bg-transparent text-sm text-gray-700 placeholder-gray-400"
                                                    />
                                                </div>
                                            </div>

                                            {/* Password Field */}
                                            <div className="relative">
                                                <label htmlFor="password" className="sr-only">
                                                    Password
                                                </label>
                                                <div className="flex items-center border rounded-lg px-3 py-2 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:border-indigo-500">
                                                    {/* <span className="material-icons text-gray-400 mr-2">lock</span> */}
                                                    <input
                                                        type="password"
                                                        id="password"
                                                        placeholder="Password"
                                                        className="w-full outline-none bg-transparent text-sm text-gray-700 placeholder-gray-400"
                                                    />
                                                </div>
                                            </div>

                                            {/* Remember Me */}
                                            <div className="flex items-center">
                                                <input
                                                    type="checkbox"
                                                    id="remember"
                                                    className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                                />
                                                <label
                                                    htmlFor="remember"
                                                    className="ml-2 text-sm text-gray-700 cursor-pointer"
                                                >
                                                    Remember Me
                                                </label>
                                            </div>

                                            {/* Login Button */}

                                            <a
                                                type="submit"
                                                href="/machines"
                                                className="button w-full bg-indigo-500 text-white text-sm font-semibold py-2 px-12 align-middle justify-center rounded-lg hover:bg-indigo-600 transition"
                                            >

                                                Login

                                            </a>

                                        </form>

                                        {/* Links */}
                                        <div className="mt-4 text-center">
                                            <p className="text-sm text-gray-600">
                                                <a href="#" className="text-indigo-500 hover:underline">
                                                    New Here? Create an account
                                                </a>
                                            </p>
                                            <p className="text-sm text-gray-600 mt-1">
                                                <a href="#" className="text-indigo-500 hover:underline">
                                                    Join the FLSmidth Academy
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <div class="flex flex-wrap w-full lg:w-1/2 justify-center">
                    <h3 class="text-3xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h3>
                </div> */}
                </div>

            </div>
        </>

    )
}

export default LandingPage