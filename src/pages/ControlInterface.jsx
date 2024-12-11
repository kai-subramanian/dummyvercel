import React from 'react';
import FLNavbar from '../components/FLNavbar';

const ControlInterface = () => {
    return (
        <>
            <FLNavbar/>
            <div className="flex h-screen bg-gray-100">
                {/* Sidebar */}
                <div className="w-1/5 bg-white shadow-md p-4">
                    <h2 className="text-xl font-bold mb-4">Robot</h2>
                    <ul>
                        {[1, 2, 3, 4, 5].map((robot) => (
                            <li
                                key={robot}
                                className="p-2 hover:bg-gray-200 cursor-pointer text-gray-700"
                            >
                                Robot {robot}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Main Content */}
                <div className="flex-1 p-8">
                    <h1 className="text-2xl font-bold mb-6">Control Interface</h1>

                    {/* Mobility Control Panel */}
                    <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                        <h2 className="text-lg font-semibold mb-4">Mobility Control Panel</h2>

                        {/* Emergency Stop */}
                        <div className="flex items-center mb-6">
                            <span className="mr-4 font-light">Emergency Stop</span>
                            {/* <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" className="sr-only peer" />
                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-500 rounded-full peer dark:bg-gray-700 peer-checked:bg-red-500"></div>
                        </label> */}
                        </div>

                        {/* Speed Slider */}
                        <div className="mb-6">
                            <span className="font-medium mr-4">Speed</span>
                            <input
                                type="range"
                                min="0"
                                max="100"
                                defaultValue="50"
                                className="w-full h-2 bg-gray-200 rounded-md appearance-none cursor-pointer accent-gray-900"
                            />
                        </div>

                        {/* Direction Controls */}
                        <div className="flex flex-col gap-3 max-w-xs">
                            <div className='flex flex-row space-x-2'><button className="p-6 bg-gray-200 rounded-lg hover:bg-gray-300 flex items-center justify-center">&uarr;</button><span className='p-3'>Forward</span></div>
                            <div className='flex flex-row space-x-2'><button className="p-6 bg-gray-200 rounded-lg hover:bg-gray-300 flex items-center justify-center">&larr;</button><span className='p-3'>Left</span></div>
                            <div className='flex flex-row space-x-2'><button className="p-6 bg-gray-200 rounded-lg hover:bg-gray-300 flex items-center justify-center"> &#9675;</button><span className='p-3'>Stop</span></div>
                            <div className='flex flex-row space-x-2'><button className="p-6 bg-gray-200 rounded-lg hover:bg-gray-300 flex items-center justify-center">&rarr;</button><span className='p-3'>Right</span></div>
                            <div className='flex flex-row space-x-2'><button className="p-6 bg-gray-200 rounded-lg hover:bg-gray-300 flex items-center justify-center">&darr;</button><span className='p-3'>Backward</span></div>

                        </div>

                        {/* <div className="flex flex-col float-left gap-4 max-w-xs mx-auto">
                        <button className="p-3 bg-gray-200 rounded-full hover:bg-gray-300 flex items-center justify-center">&uarr;</button>
                        <button className="p-3 bg-gray-200 rounded-full hover:bg-gray-300 flex items-center justify-center">&larr;</button>
                        <button className="p-3 bg-gray-200 rounded-full hover:bg-gray-300 flex items-center justify-center">&rarr;</button>
                        <button className="p-3 bg-gray-200 rounded-full hover:bg-gray-300 flex items-center justify-center">&darr;</button>
                        <button className="col-span-3 p-3 bg-gray-200 rounded-full hover:bg-gray-300 flex items-center justify-center">Stop</button>
                    </div> */}
                    </div>

                    {/* Robot Image */}
                    <div className="bg-white rounded-lg shadow-md flex justify-center p-5">
                        <img
                            src="https://via.placeholder.com/1200x500" // Replace with actual robot image URL
                            alt="Robot"
                            className="max-w-full h-auto rounded-md object-contain"
                        />
                    </div>
                </div>
            </div>
        </>

    );
};

export default ControlInterface;
