import { CalendarIcon, PaperClipIcon, TagIcon, UserCircleIcon, UsersIcon, ArrowTrendingUpIcon } from '@heroicons/react/24/outline'
import React from 'react'

const MachineInfoCard = () => {
  return (
    <>
      <div>
        <div className="w-3/4 mx-auto bg-white shadow-md rounded-md p-6">
          {/* Header */}
          <div className="mb-4">
            <p className="text-sm pb-3 text-gray-500">Place Name / Machine Number -1404</p>
            <h2 className="text-3xl py-3 font-bold text-gray-800">Laborum adipisicing culpa</h2>

          </div>

          <div className="mb-6">
            <table className="table-auto w-full text-left text-sm">
              <tbody>
                {/* Priority */}
                <tr className="border-b">
                  <th className="py-2 pr-4 text-gray-700 font-medium">
                    <div className='flex flex-row gap-3'><ArrowTrendingUpIcon className='size-5'></ArrowTrendingUpIcon>Priority</div>
                  </th>
                  <td>
                    <span className="px-2 py-1 text-sm text-white bg-teal-500 rounded-full">High</span>
                  </td>
                </tr>

                {/* Labels */}
                <tr className="border-b">
                  <th className="py-2 pr-4 text-gray-700 font-medium">
                    <div className='flex flex-row gap-3'><TagIcon className='size-5'></TagIcon>Label</div>
                  </th>
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
                  <th className="py-2 pr-4 text-gray-700 font-medium">
                    <div className='flex flex-row gap-3'><UsersIcon className='size-5'></UsersIcon>Owner</div>
                  </th>
                  <td className="flex items-center gap-2 py-2">
                    <img src="https://via.placeholder.com/32" alt="James Green" className="w-8 h-8 rounded-full" />
                    <span className="text-gray-800 font-semibold">James Green</span>
                  </td>
                </tr>

                {/* Assignee */}
                <tr className="border-b">
                  <th className="py-2 pr-4 text-gray-700 font-medium">
                    <div className='flex flex-row gap-3'><UserCircleIcon className='size-5'></UserCircleIcon>Assignee</div>
                  </th>
                  <td className="flex items-center gap-2 py-2">
                    <img src="https://via.placeholder.com/32" alt="Emma Willis" className="w-8 h-8 rounded-full" />
                    <span className="text-gray-800 font-semibold">Emma Willis</span>
                  </td>
                </tr>

                {/* Due Date */}
                <tr>
                  <th className="pr-4 text-gray-700 font-medium py-3">
                    <div className='flex flex-row gap-3'><CalendarIcon className='size-5'></CalendarIcon>Due Date</div>
                  </th>
                  <td className="text-gray-800 font-semibold py-3">April 28, 2022</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Attachments */}
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

          {/* Description */}
          <div>
            <span className="font-medium text-gray-700 uppercase py-2">Description</span><br></br>
            <button className="flex flex-row mt-4 px-4 py-2 bg-gray-100 text-gray-500 rounded hover:bg-gray-200">
              <img src="https://via.placeholder.com/32" alt="James Green" className="w-8 h-8 rounded-full mr-2" />
              Add a comment...
            </button>
            <p className="text-gray-600 mt-2 py-5">
              Elit nisi ad excepteur aliquip cupidatat aliquip occaecat consectetur ex. Non culpa laborum pariatur mollit
              anim et nisi quis.
            </p>

          </div>
        </div>
      </div>
    </>

  )
}

export default MachineInfoCard