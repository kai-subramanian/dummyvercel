import React from 'react';
import WorldMap from '../components/WorldMap';
import FactoryCard from '../components/FactoryCard';
import FLNavbar from '../components/FLNavbar';

function MainComponent() {
    const factoryData = [
        { name: 'Factory Name, City', info: 'Some basic info the client needs to know', city: 'City' },
    ];

    return (
        <>
            <FLNavbar></FLNavbar>
            <div className='bg-gray-900'>
                <div className='flex md:flex-row items-center justify-stretch flex-col'>
                    <WorldMap />
                    <div className='flex flex-col max-h-[560px] mx-1 gap-2 overflow-y-auto'>
                        <FactoryCard factoryData={factoryData[0]} />
                        <FactoryCard factoryData={factoryData[0]} />
                        <FactoryCard factoryData={factoryData[0]} />
                        <FactoryCard factoryData={factoryData[0]} />
                        <FactoryCard factoryData={factoryData[0]} />
                    </div>
                    {/* <div className='flex scroll-y-auto'>
                    <CardOfCards></CardOfCards>
                </div> */}
                </div>
                <div className='md:pl-28 pb-10'>
                    <div className="mt-4 flex items-center space-x-4">
                        <div className="flex items-center space-x-2">
                            <span className="w-3 h-3 bg-teal-500 rounded-full"></span>
                            <span className='text-gray-50'>Regions</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
                            <span className='text-gray-50'>Coming soon</span>
                        </div>
                    </div>
                    {/* Buttons */}
                    <div className="mt-6 -ml-3">
                        <button className='flex flex-row'>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="-5 -1 24 24"
                                stroke="white"
                                className="w-8 h-8"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d={"M4 6h16M4 12h16M4 18h16"}
                                />
                            </svg>
                            <span className="text-gray-50 px-4 py-2 rounded text-sm">
                                List View
                            </span>
                            <button className="ml-4 bg-teal-300 px-4 py-2 rounded text-sm">
                                Recents
                            </button>
                        </button>


                    </div>
                </div>
            </div>


        </>

    );
}

export default MainComponent;