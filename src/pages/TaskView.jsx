import { useState } from "react";
import React from 'react';
import FLNavbar from "../components/FLNavbar";

const TaskView = () => {
    const [activeTab, setActiveTab] = useState('Ad-hoc');
    return (
        <>
            <FLNavbar/>
            <div className="flex min-h-screen bg-gray-50 text-gray-800">
                {/* Sidebar */}
                <aside className="w-64 bg-white shadow-md">
                    <div className="p-6">
                        <h1 className="text-2xl font-semibold">Robot AI</h1>
                    </div>
                    <nav className="mt-6">
                        {[
                            { label: 'Dashboard', icon: '🏠' },
                            { label: 'Inspections', icon: '🔍' },
                            { label: 'Task list', icon: '📋', active: true },
                            { label: 'Reports', icon: '📊' },
                            { label: 'Settings', icon: '⚙️' },
                        ].map((item) => (
                            <button
                                key={item.label}
                                className={`flex items-center p-4 space-x-5 text-sm font-medium ${item.active ? 'bg-gray-100 text-gray-900' : 'text-gray-500 hover:bg-gray-50'
                                    }`}
                            >
                                <span className="mr-2">
                                    {item.icon}
                                    {item.label}
                                </span>
                            </button>
                        ))}
                    </nav>
                </aside>

                {/* Main Content */}
                <main className="flex-1 p-6">
                    {/* Header */}
                    <div className="mb-6">
                        <h2 className="text-2xl font-bold">Task list</h2>
                        <p className="text-sm text-gray-500">
                            Scheduled inspections will be performed automatically. Ad-hoc
                            inspections must be initiated manually.
                        </p>
                    </div>

                    {/* Tabs */}
                    {/* <div className="flex items-center border-b border-gray-200 mb-6">
                    <button className="px-4 py-2 text-sm font-medium border-b-2 border-blue-500 text-blue-500">
                        Ad-hoc
                    </button>
                    <button className="px-4 py-2 text-sm font-medium text-gray-500 hover:text-blue-500 hover:border-blue-500">
                        Scheduled
                    </button>
                </div> */}
                    <div className="flex items-center justify-start min-w-full space-x-4 mb-6">
                        <button className="px-6 py-2 text-sm font-medium text-white bg-gray-800 rounded-full shadow-sm">
                            Ad-hoc
                        </button>
                        <button className="px-6 py-2 text-sm font-medium text-gray-500 bg-gray-100 rounded-full hover:bg-gray-200">
                            Scheduled
                        </button>
                    </div>
                    {/* Tabs */}
                    {/* <div className="mb-6 min-w-screen">
                    <div className="flex space-x-4 min-w-screen">
                        <button
                            onClick={() => setActiveTab('Ad-hoc')}
                            className={`px-4 py-2 rounded-md font-medium focus:outline-none transition ${activeTab === 'Ad-hoc'
                                ? 'bg-blue-500 text-white'
                                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                }`}
                        >
                            Ad-hoc
                        </button>
                        <button
                            onClick={() => setActiveTab('Scheduled')}
                            className={`px-4 py-2 rounded-md font-medium focus:outline-none transition ${activeTab === 'Scheduled'
                                ? 'bg-blue-500 text-white'
                                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                }`}
                        >
                            Scheduled
                        </button>
                    </div>
                </div> */}

                    {/* Task List */}
                    <div className="space-y-4">
                        {[
                            { title: 'Daily Inspection', date: 'Aug 17, 2023, 11:15 AM' },
                            { title: 'Weekly Inspection', date: 'Aug 16, 2023, 8:30 AM' },
                            { title: 'Monthly Inspection', date: 'Aug 15, 2023, 7:45 AM' },
                            { title: 'Quarterly Inspection', date: 'Aug 14, 2023, 1:20 PM' },
                        ].map(({ title, date }) => (
                            <div
                                key={title}
                                className="flex items-center justify-between p-4 bg-white shadow rounded-lg"
                            >
                                <div>
                                    <h3 className="text-lg font-medium">{title}</h3>
                                    <p className="text-sm text-gray-500">Last Updated: {date}</p>
                                </div>
                                <button className="px-4 py-2 bg-blue-500 text-white text-sm rounded-md hover:bg-blue-600">
                                    Start
                                </button>
                            </div>
                        ))}
                    </div>

                    {/* Create New Inspection */}
                    <button className="mt-6 px-6 py-2 float-right    bg-gray-200 text-gray-700 text-sm rounded-md hover:bg-gray-300">
                        Create new inspection
                    </button>
                </main>
            </div>
        </>
    );
};

export default TaskView;
