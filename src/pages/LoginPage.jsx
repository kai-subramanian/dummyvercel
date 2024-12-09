import React from 'react'

const LoginPage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
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
                    <button
                        type="submit"
                        className="w-full bg-indigo-500 text-white text-sm font-semibold py-2 rounded-lg hover:bg-indigo-600 transition"
                    >
                        Login
                    </button>
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
    );
}

export default LoginPage