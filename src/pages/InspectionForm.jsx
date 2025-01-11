import React from 'react'
import FLNavbar from '../components/FLNavbar'
import { CalendarIcon, PaperClipIcon, TagIcon, UserCircleIcon, UsersIcon, ArrowTrendingUpIcon, CameraIcon } from '@heroicons/react/24/outline'

const InspectionForm = () => {
  return (
    <>
      <div className='bg-white'>
        <FLNavbar></FLNavbar>
        <>
          <div className='flex flex-row md:flex-col'>
            <div className='flex flex-col md:flex-row text-gray-500 text-3xl font-bold px-20 pt-10 pb-5 justify-between'>
              Inspection Form
              <div className='float-right font-light text-xl md:py-1 py-5'>
                <a href="/cameraview"><button className='bg-blue-600 text-white rounded-lg px-5 py-1 flex flex-row'><CameraIcon className='size-8 flex my-auto pr-3'></CameraIcon>Start Inspecting</button></a>
              </div>
            </div>
          </div>
        </>
        <div className="min-h-screen bg-white flex items-baseline justify-center px-6 pt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-7xl">
            {/* Left Section: Form */}
            <div className="bg-white shadow-md rounded-2xl px-6 border border-gray-200 pb-10">

              <p className="text-gray-800 mt-6">Any Subtitle here</p>
              <form className="space-y-6 mt-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Label</label>
                    <input
                      type="text"
                      className="mt-1 block w-full rounded-lg p-2 bg-gray-100 border-gray-300 shadow-md shadow-gray-500 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      placeholder="Input text"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Label</label>
                    <input
                      type="text"
                      className="mt-1 block w-full rounded-lg p-2 bg-gray-100 border-gray-500 shadow-md shadow-gray-500 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      placeholder="Input text"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Label</label>
                    <input
                      type="text"
                      className="mt-1 block w-full rounded-lg p-2 bg-gray-100 border-1 border-gray-500 shadow-md shadow-gray-500 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      placeholder="Input text"
                    />
                    <p className="mt-1 text-sm text-gray-600">Consectetur nulla est voluptate.</p>
                  </div>
                  <br></br>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Label</label>
                    <select
                      className="mt-1 block w-full rounded-lg p-2 bg-gray-100 border-gray-300 shadow-md shadow-gray-500 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    >
                      <option>Option 1</option>
                      <option>Option 2</option>
                      <option>Option 3</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Label</label>
                    <input
                      type="text"
                      className="mt-1 block w-full rounded-lg p-2 bg-gray-100 border-gray-300 shadow-md shadow-gray-500 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      placeholder="Input text"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Label</label>
                    <input
                      type="text"
                      className="mt-1 block w-full rounded-md p-2 bg-gray-100 border-gray-300 shadow-md shadow-gray-500 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      placeholder="Input text"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <div>
                    <input
                      type="checkbox"
                      id="checkbox1"
                      className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                    />
                    <label htmlFor="checkbox1" className="ml-2 text-sm text-gray-700">
                      Checkbox
                    </label>
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      id="checkbox2"
                      className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                    />
                    <label htmlFor="checkbox2" className="ml-2 text-sm text-gray-700">
                      Checkbox
                    </label>
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      id="checkbox2"
                      className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                    />
                    <label htmlFor="checkbox2" className="ml-2 text-sm text-gray-700">
                      Checkbox
                    </label>
                  </div>

                </div>
              </form>
            </div>

            {/* Right Section: Info Card */}
            <div className="bg-white shadow-md rounded-2xl p-6 border border-gray-200">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-medium text-gray-800">Labore Adipisicing Culpa</h2>
              </div>
              <p className="text-sm text-gray-500 mt-1">Place Name / Machine Number -1404</p>
              <div className="mt-6 space-y-4">
                {/* <div>
                  <p className="text-sm font-medium text-gray-700">Priority</p>
                  <span className="inline-block px-3 py-1 mt-1 text-sm font-medium bg-green-100 text-green-800 rounded-full">
                    High
                  </span>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-700">Label</p>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="px-3 py-1 text-sm font-medium bg-gray-100 text-gray-800 rounded-full">Label</span>
                    <span className="px-3 py-1 text-sm font-medium bg-gray-100 text-gray-800 rounded-full">Label</span>
                    <button className="px-3 py-1 text-sm font-medium bg-gray-100 text-gray-800 rounded-full">
                      + Add Label
                    </button>
                  </div>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-700">Owner</p>
                  <p className="mt-1 text-sm text-gray-500">James Green</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-700">Assignee</p>
                  <p className="mt-1 text-sm text-gray-500">Emma Willis</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-700">Due Date</p>
                  <p className="mt-1 text-sm text-gray-500">April 28, 2022</p>
                </div> */}
                <div className="mb-6">
                  <table className="table-auto w-full text-left text-sm">
                    <tbody>
                      {/* Priority */}
                      <tr className="border-b">
                        <th className="py-2 pr-4 text-gray-700 font-medium"><div className='flex flex-row gap-3'><ArrowTrendingUpIcon className='size-5'></ArrowTrendingUpIcon>Priority</div></th>
                        <td>
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

                      {/* Owner */}
                      <tr className="border-b">
                        <th className="py-2 pr-4 text-gray-700 font-medium"><div className='flex flex-row gap-3'><UsersIcon className='size-5'></UsersIcon>Owner</div></th>
                        <td className="flex items-center gap-2 py-2">
                          <img src="https://via.placeholder.com/32" alt="James Green" className="w-8 h-8 rounded-full" />
                          <span className="text-gray-800 font-semibold">James Green</span>
                        </td>
                      </tr>

                      {/* Assignee */}
                      <tr className="border-b">
                        <th className="py-2 pr-4 text-gray-700 font-medium"><div className='flex flex-row gap-3'><UserCircleIcon className='size-5'></UserCircleIcon>Assignee</div></th>
                        <td className="flex items-center gap-2 py-2">
                          <img src="https://via.placeholder.com/32" alt="Emma Willis" className="w-8 h-8 rounded-full" />
                          <span className="text-gray-800 font-semibold">Emma Willis</span>
                        </td>
                      </tr>

                      {/* Due Date */}
                      <tr>
                        <th className="pr-4 text-gray-700 font-medium py-3"><div className='flex flex-row gap-3'><CalendarIcon className='size-5'></CalendarIcon>Due Date</div></th>
                        <td className="text-gray-800 font-semibold py-3">April 28, 2022</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                {/* <div className='flex flex-col'>
                  <p className="text-sm font-medium text-gray-700">Attachments</p>
                  <button className="text-indigo-600 mt-1 text-sm font-medium">Document Link</button>
                  <button className="text-indigo-600 mt-1 ml-4 text-sm font-medium">+ Add Attachments</button>
                </div> */}
                <div className="mb-4">
                  <div className="flex flex-col gap-3">
                    <span className="font-medium text-gray-700">
                      <a>
                        <div className='flex flex-row'>
                          <PaperClipIcon className='size-5 flex -rotate-45 text-blue-500'></PaperClipIcon>
                          <a href="#" className="text-blue-500 hover:underline">Document link</a>
                        </div>
                      </a>

                    </span>

                    <div className='mr-10 py-3'>
                      <button className="px-3 py-2 text-sm bg-gray-100 text-gray-800 rounded hover:bg-gray-300">
                        + Add attachments
                      </button>
                    </div>

                  </div>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-700">Description</p>
                  <p className="mt-1 text-sm text-gray-500">
                    Elit nisi ad excepteur aliquip cupidatat aliquip occaecat consectetur ex. Non culpa laborum pariatur
                    mollit anim.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default InspectionForm