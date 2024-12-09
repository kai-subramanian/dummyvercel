import React from 'react'

const Subscribe = () => {
    return (
        <>
            <div className='bg-slate-900 flex flex-col items-center justify-center py-8 px-1'>
                <h1 style={{ textAlign: 'center', justifyContent: 'center' }} className='md:text-2xl font-bold text-md py-12 md:py-24 text-gray-50'>
                    Subscribe to our newsletter<br></br>
                    <div className='py-2 md:px-0 px-3'></div>
                    {/* <input class="shadow appearance-none border text-sm outline-2 bg-transparent max-w-md outline-purple-500 w-full py-2 px-10 rounded-full text-gray-700 leading-tight focus:outline-1 focus:shadow-outline" id="username" type="text" placeholder="Enter your mail ID here"></input> */}
                    <div className="flex items-center text-sm bg-gray-800 rounded-full w-full max-w-xl overflow-hidden">
                        <div className="flex items-center px-4">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6 text-gray-400"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M21.75 7.5l-8.485 8.485c-.682.683-1.89.683-2.572 0L2.25 7.5M19.5 3H4.5a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 004.5 21h15a2.25 2.25 0 002.25-2.25V5.25A2.25 2.25 0 0019.5 3z"
                                />
                            </svg>
                        </div>
                        <input
                            type="email"
                            placeholder="Input your email"
                            className="bg-transparent flex-grow outline-none text-white placeholder-gray-400 px-2"
                        />
                        <button
                            type="submit"
                            className="bg-indigo-500 text-white px-6 py-2 font-medium rounded-r-full hover:bg-indigo-600 transition-all"
                        >
                            Subscribe
                        </button>
                    </div>
                </h1>
            </div>

            {/* <div className='bg-slate-900 flex flex-col py-5'>
                    AIR
            </div> */}

        </>

    )
}

export default Subscribe