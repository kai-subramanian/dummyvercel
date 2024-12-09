import React from 'react';

const ComingSoon = () => {
    return (
        <div className="min-h-[630px] flex flex-col items-center justify-center bg-white text-center px-6 relative overflow-hidden">
            {/* Logo */}
            {/* <div className="absolute top-8 left-8">
                <h1 className="text-xl font-bold">
                    <span className="text-indigo-500">Unreal</span>{' '}
                    <span className="text-gray-900">Innovations</span>
                </h1>
            </div> */}

            {/* Main Content */}
            <div className="z-10">
                <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
                    EXCITING THINGS ARE ON THE HORIZON...
                </h2>
                <p className="text-gray-600 flex max-w-md mt-4 md:mx-60 ">
                    Subscribe to be the first to know about all the events and get a
                    discount on your first order!
                </p>

                {/* Email Subscription Form */}
                <div className="flex items-center justify-center gap-2 mt-6">
                    <input
                        type="email"
                        placeholder="Enter your email here"
                        className="border border-gray-300 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 w-64"
                    />
                    <button className="bg-indigo-500 text-white font-semibold px-6 py-2 rounded-full hover:bg-indigo-600 transition">
                        Subscribe
                    </button>
                </div>
            </div>

            {/* Coming Soon Ribbon */}
            <div className="absolute bottom-0 left-0 w-full h-80 overflow-hidden">
                <div className="relative w-[300%] h-full md:rotate-[-3deg] rotate-[-12deg] -translate-y-16 flex items-center">
                    <div className="flex w-full animate-scroll whitespace-nowrap">
                        {Array(6)
                            .fill(null)
                            .map((_, i) => (
                                <div
                                    key={i}
                                    className="text-indigo-500 text-xl font-bold uppercase tracking-wider px-6"
                                >
                                    | Coming Soon | Coming Soon | Coming Soon |
                                </div>
                            ))}
                    </div>
                </div>
            </div>

            <div className="absolute bottom-0 left-0 w-full h-80 overflow-hidden">
                <div className="relative w-[300%] h-full md:rotate-[3deg] rotate-[12deg] translate-y-24 flex items-center">
                    <div className="flex w-full animate-scroll whitespace-nowrap">
                        {Array(8)
                            .fill(null)
                            .map((_, i) => (
                                <div
                                    key={i}
                                    className="text-black-500 bg-gray-300 text-xl font-bold uppercase tracking-wider px-6"
                                >
                                    | Coming Soon | Coming Soon | Coming Soon |
                                </div>
                            ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ComingSoon;
