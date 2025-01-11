import React from 'react'
import FLNavbar from '../components/FLNavbar'
import { UserCircleIcon, TagIcon, ArrowTrendingUpIcon, CalendarIcon, PercentBadgeIcon } from '@heroicons/react/24/outline'
const CameraView = () => {
    return (
        <>
            <div>
                <FLNavbar></FLNavbar>
            </div>
            <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
                <div className="w-full max-w-7xl space-y-8">
                    {/* Video Section */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Inspection Camera View */}
                        <div>
                            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg">
                                <iframe
                                    className="w-full h-full rounded-lg"
                                    src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                                    title="Inspection Camera View"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                            <h2 className="text-sm font-medium text-gray-600 uppercase mt-6">
                                Inspection Camera View
                            </h2>
                        </div>

                        {/* Surrounding Camera View */}
                        <div>

                            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg ">
                                <iframe
                                    className="w-full h-full rounded-lg"
                                    src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                                    title="Surrounding Camera View"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                            <h2 className="text-sm font-medium text-gray-600 uppercase mt-6">
                                Surrounding Camera View
                            </h2>
                        </div>
                    </div>

                    {/* Details and Action Section */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 justify-between">
                        {/* Details Section */}
                        {/* <div className="bg-white shadow-md rounded-lg p-6">
                            <div className="space-y-4">
                                <div className="flex items-center">
                                    <span className="text-gray-600 mr-4">Priority:</span>
                                    <span className="px-2 py-1 text-sm font-medium text-white bg-green-500 rounded-md">
                                        High
                                    </span>
                                </div>
                                <div className="flex items-center">
                                    <span className="text-gray-600 mr-4">Label:</span>
                                    <div className="space-x-2">
                                        <span className="px-2 py-1 text-sm font-medium bg-gray-200 rounded-md">
                                            Label
                                        </span>
                                        <span className="px-2 py-1 text-sm font-medium bg-gray-200 rounded-md">
                                            Label
                                        </span>
                                        <span className="px-2 py-1 text-sm font-medium bg-gray-200 rounded-md">
                                            Label
                                        </span>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <span className="text-gray-600 mr-4">Assignee:</span>
                                    <div className="flex items-center space-x-2">
                                        <img
                                            src="https://via.placeholder.com/32"
                                            alt="Profile"
                                            className="w-8 h-8 rounded-full"
                                        />
                                        <span>Emma Willis</span>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <span className="text-gray-600 mr-4">Completed Percentage:</span>
                                    <span>60%</span>
                                </div>
                                <div className="flex items-center">
                                    <span className="text-gray-600 mr-4">
                                        Estimated Time of Completion:
                                    </span>
                                    <span>11.11.2024 16:20:77 EST</span>
                                </div>
                            </div>
                        </div> */}
                        <div className="mb-6">
                            <table className="table-auto w-full text-left text-sm">
                                <tbody>
                                    {/* Priority */}
                                    <tr className="border-b">
                                        <th className="py-2 pr-4 text-gray-700 font-medium"><div className='flex flex-row gap-3'><ArrowTrendingUpIcon className='size-5'></ArrowTrendingUpIcon>Priority</div></th>
                                        <td className='pr-4 py-2'>
                                            <span className="px-2 py-1 text-sm text-white bg-teal-500 rounded-full">High</span>
                                        </td>
                                    </tr>

                                    {/* Labels */}
                                    <tr className="border-b">
                                                            <th className="py-2 pr-4 text-gray-700 font-medium"><div className='flex flex-row gap-3'><TagIcon className='size-5'></TagIcon>Label</div></th>
                                                            <td className="flex flex-wrap gap-5">
                                                              <div className='flex md:flex-row flex-col items-center gap-3 py-2'>
                                                                <span className="px-2 py-1 text-sm bg-purple-100 text-purple-700 rounded-xl flex flex-row items-center">Label</span>
                                                                <span className="px-2 py-1 text-sm bg-pink-100 text-pink-700 rounded-xl flex items-center">Label</span>
                                                                <span className="px-2 py-1 text-sm bg-orange-100 text-orange-700 rounded-xl flex items-center">Label</span>
                                                                <button className="px-2 py-1 text-sm bg-gray-100 text-gray-500 rounded-xl flex items-center hover:bg-gray-200">
                                                                  + Add label
                                                                </button>
                                                              </div>
                                    
                                                            </td>
                                                          </tr>


                                    {/* Assignee */}
                                    <tr className="border-b">
                                        <th className="py-2 pr-4 text-gray-700 font-medium"><div className='flex flex-row gap-3'><UserCircleIcon className='size-5'></UserCircleIcon>Assignee</div></th>
                                        <td className="flex items-center gap-2">
                                            <img src="https://via.placeholder.com/32" alt="Emma Willis" className="w-8 h-8 rounded-full" />
                                            <span className="text-gray-800 font-semibold">Emma Willis</span>
                                        </td>
                                    </tr>

                                    {/* Owner */}
                                    <tr className="border-b">
                                        <th className="py-2 pr-4 text-gray-700 font-medium"><div className='flex flex-row gap-3'><PercentBadgeIcon className='size-5'></PercentBadgeIcon>Completed Percentage</div></th>
                                        <td className="flex items-center gap-2">
                                            {/* <img src="https://via.placeholder.com/32" alt="James Green" className="w-8 h-8 rounded-full" /> */}
                                            <span className="py-2 pr-4 text-gray-800 font-semibold items-center">60%</span>
                                            <progress id="file" value="60" max="100"></progress>
                                        </td>
                                    </tr>

                                    {/* Due Date */}
                                    <tr>
                                        <th className="py-2 pr-4 text-gray-700 font-medium"><div className='flex flex-row gap-3'><CalendarIcon className='size-5'></CalendarIcon>Estimated Time and Completion Date</div></th>
                                        <td className="text-gray-800 font-semibold">11.11.2024 16:20:77 EST</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        {/* Action Section */}

                        <div className="bg-white shadow-md rounded-lg p-6 flex flex-col space-y-4 max-w-96 justify-between ml-[50%]">
                            <button className="w-full px-4 py-2 bg-black text-white font-medium text-sm rounded-lg">
                                Stop Inspection
                            </button>
                            <button className="w-full px-4 py-2 bg-gray-200 text-gray-700 font-medium text-sm rounded-lg">
                                Pause Inspection
                            </button>
                            <button className="w-full px-4 py-2 bg-gray-200 text-gray-700 font-medium text-sm rounded-lg">
                                Complete Inspection
                            </button>
                        </div>



                    </div>
                </div>
            </div>
        </>
    )
}

export default CameraView