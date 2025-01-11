import React from 'react'
import { useParams } from 'react-router-dom'
import FLNavbar from './FLNavbar'
import { ArrowDownIcon, CameraIcon } from '@heroicons/react/24/outline';


const MachineDetails = () => {
    const { productId } = useParams();
    console.log(productId);
    const machineDetails = [
        { name: "Elizabeth Lopez", username: "elizabethlopez" },
        { name: "Matthew Martinez", username: "mmartinez1997" },
        { name: "Elizabeth Hall", username: "elizabeth_hall_1998" },
        { name: "Maria White", username: "maria_white" },
        { name: "Elizabeth Watson", username: "ewatson" },
        { name: "Elizabeth Allen", username: "eallen1998" },
        { name: "Caleb Jones", username: "calebjones" },
    ];

    const socialAccounts = [
        { name: "Elizabeth Allen", username: "eallen1998" },
    ];


    const reportDetails = {
        priority: "High",
        labels: ["Label", "Label", "Label"],
        owner: "James Green",
        assignee: "Emma Willis",
        dueDate: "April 28, 2022",
    };


    return (
        <>
            <FLNavbar></FLNavbar>
            <div>
                <div className='flex flex-row md:flex-col'>
                    <div className='flex flex-col md:flex-row text-gray-500 text-3xl font-bold px-20 pt-20 pb-5 justify-between'>
                        Machine Name & Number Goes Here
                        <div className='float-right font-light text-xl'>
                            <button className='bg-blue-600 text-white rounded-lg px-5 py-1 flex flex-row'><ArrowDownIcon className='size-8 flex align-middle my-auto pr-2'></ArrowDownIcon>Download Report</button>
                        </div>
                    </div>
                </div>
                <div className="max-w-7xl mx-auto p-6 grid grid-cols-1 lg:grid-cols-2 gap-6 bg-gray-50">
                    {/* Machine Details Section */}
                    <div>
                        <div className="mb-8">
                            <h2 className="text-lg font-bold text-gray-800 mb-4">Machine Details</h2>
                            <div className="bg-white shadow rounded-md overflow-hidden">
                                <table className="table-auto w-full">
                                    <tbody>
                                        {machineDetails.map((detail, index) => (
                                            <tr
                                                key={index}
                                                className={`${index % 2 === 0 ? "bg-gray-50" : "bg-white"
                                                    }`}
                                            >
                                                <td className="px-4 py-3 text-sm font-normal text-gray-500">
                                                    {detail.name.toUpperCase()}
                                                </td>
                                                <td className="px-4 py-3 text-sm font-semibold text-gray-800">
                                                    {detail.username}
                                                </td>
                                                <td className="px-4 py-3 text-right">
                                                    <button className="text-sm text-blue-500 hover:underline">
                                                        Edit
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-lg font-bold text-gray-800 mb-4">Social Accounts</h2>
                            <div className="bg-white shadow rounded-md overflow-hidden">
                                <table className="table-auto w-full">
                                    <tbody>
                                        {socialAccounts.map((account, index) => (
                                            <tr
                                                key={index}
                                                className={`${index % 2 === 0 ? "bg-gray-50" : "bg-white"
                                                    }`}
                                            >
                                                <td className="px-4 py-3 text-sm font-normal text-gray-500">
                                                    {account.name.toUpperCase()}
                                                </td>
                                                <td className="px-4 py-3 text-sm font-semibold text-gray-800">
                                                    {account.username}
                                                </td>
                                                <td className="px-4 py-3 text-right">
                                                    <button className="text-sm text-blue-500 hover:underline">
                                                        Edit
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    {/* Report Details Section */}
                    <div>
                        <div className="bg-white shadow rounded-md px-6">
                            <span className='text-gray-500 font-light mb-8'>Place Name / Machine Name 1809 / Inspection Number 19</span>
                            <h2 className="text-lg font-bold text-gray-800 mt-2">Report Details</h2>
                            {/* <div className="space-y-4">
                                <div className="flex justify-between items-center">
                                    <span className="text-sm font-medium text-gray-600">Priority</span>
                                    <span className="px-2 py-1 text-sm text-white bg-green-500 rounded">
                                        {reportDetails.priority}
                                    </span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-sm font-medium text-gray-600">Label</span>
                                    <div className="space-x-2">
                                        {reportDetails.labels.map((label, index) => (
                                            <span
                                                key={index}
                                                className="px-2 py-1 text-sm text-white bg-purple-500 rounded"
                                            >
                                                {label}
                                            </span>
                                        ))}
                                        <button className="text-sm text-blue-500 hover:underline">
                                            + Add label
                                        </button>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-sm font-medium text-gray-600">Owner</span>
                                    <span className="text-sm text-gray-800">{reportDetails.owner}</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-sm font-medium text-gray-600">Assignee</span>
                                    <span className="text-sm text-gray-800">{reportDetails.assignee}</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-sm font-medium text-gray-600">Due Date</span>
                                    <span className="text-sm text-gray-800">{reportDetails.dueDate}</span>
                                </div>
                            </div>
                            <hr className="my-6 border-gray-200" />
                            <h3 className="text-md font-semibold text-gray-700 mb-4">Machine Inspection</h3>
                            <div className="space-y-4">
                                <div className="flex justify-between items-center">
                                    <span className="text-sm font-medium text-gray-600">Priority</span>
                                    <span className="px-2 py-1 text-sm text-white bg-green-500 rounded">
                                        {reportDetails.priority}
                                    </span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-sm font-medium text-gray-600">Label</span>
                                    <div className="space-x-2">
                                        {reportDetails.labels.map((label, index) => (
                                            <span
                                                key={index}
                                                className="px-2 py-1 text-sm text-white bg-purple-500 rounded"
                                            >
                                                {label}
                                            </span>
                                        ))}
                                        <button className="text-sm text-blue-500 hover:underline">
                                            + Add label
                                        </button>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-sm font-medium text-gray-600">Owner</span>
                                    <span className="text-sm text-gray-800">{reportDetails.owner}</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-sm font-medium text-gray-600">Assignee</span>
                                    <span className="text-sm text-gray-800">{reportDetails.assignee}</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-sm font-medium text-gray-600">Due Date</span>
                                    <span className="text-sm text-gray-800">{reportDetails.dueDate}</span>
                                </div>
                            </div> */}

                            <br></br>
                            <div>
                                <object data="https://s28.q4cdn.com/392171258/files/doc_downloads/test.pdf" type="application/pdf" height={350} width={600} />
                                {/* <p>Alternative text - include a link <a href="https://s28.q4cdn.com/392171258/files/doc_downloads/test.pdf">to the PDF!</a></p>
                                </object> */}
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MachineDetails