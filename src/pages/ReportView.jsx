import React from "react";
import FLNavbar from "../components/FLNavbar";

const ReportView = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Header */}
      {/* <header className="flex items-center justify-between px-6 py-4 bg-white shadow-md">
        <h1 className="text-xl font-semibold">RoboLog</h1>
        <nav className="flex items-center space-x-6">
          {["Dashboard", "Robot Management", "Inspections", "Preventative Maintenance", "Reports", "Training"].map(
            (item) => (
              <a
                key={item}
                href="#"
                className="text-sm font-medium text-gray-600 hover:text-gray-800"
              >
                {item}
              </a>
            )
          )}
        </nav>
        <div className="flex items-center space-x-4">
          <button className="px-4 py-2 text-sm text-gray-600 bg-gray-100 rounded-md hover:bg-gray-200">
            Search
          </button>
          <button className="px-4 py-2 text-sm text-white bg-blue-500 rounded-md hover:bg-blue-600">
            New
          </button>
          <button className="px-4 py-2 text-sm text-gray-600 bg-gray-100 rounded-md hover:bg-gray-200">
            Upgrade
          </button>
        </div>
      </header> */}
      <FLNavbar/>

      {/* Main Content */}
      <main className="px-32 py-10 ">
        {/* Title and Actions */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Reports</h2>
          <button className="px-4 py-2 text-sm text-white bg-blue-500 rounded-md hover:bg-blue-600">
            Create report
          </button>
        </div>

        {/* Filters */}
        <div className="flex items-center space-x-4 mb-6">
          {["All", "Robot", "Inspection", "Preventative Maintenance"].map(
            (filter, index) => (
              <button
                key={filter}
                className={`px-4 py-2 text-sm font-medium rounded-full ${
                  index === 0
                    ? "bg-blue-500 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {filter}
              </button>
            )
          )}
        </div>

        {/* Search Bar */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search all reports"
            className="w-full px-4 py-2 text-sm bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Table */}
        <div className="overflow-hidden border border-gray-200 rounded-lg shadow-sm">
          <table className="min-w-full bg-white">
            <thead>
              <tr className="bg-gray-100">
                {["Report Name", "Type", "Created", "Modified", "Actions"].map(
                  (header) => (
                    <th
                      key={header}
                      className="px-6 py-3 text-left text-sm font-medium text-gray-600"
                    >
                      {header}
                    </th>
                  )
                )}
              </tr>
            </thead>
            <tbody>
              {[
                {
                  name: "Daily Inspection Report",
                  type: "Inspection",
                  created: "May 16",
                  modified: "Aug 3",
                  actions: "View, Edit, Export",
                },
                {
                  name: "Weekly Preventative Maintenance Report",
                  type: "Preventative Maintenance",
                  created: "May 28",
                  modified: "Aug 2",
                  actions: "View, Edit, Export",
                },
                {
                  name: "Monthly Robot Telemetry Report",
                  type: "Robot",
                  created: "Jun 5",
                  modified: "Jul 29",
                  actions: "View, Edit, Export",
                },
                {
                  name: "Quarterly Security Audit Report",
                  type: "Inspection",
                  created: "Jul 1",
                  modified: "Jul 30",
                  actions: "View, Edit, Export",
                },
                {
                  name: "Annual Safety Compliance Report",
                  type: "Preventative Maintenance",
                  created: "Aug 3",
                  modified: "Aug 3",
                  actions: "View, Edit, Export",
                },
                {
                  name: "Ad-hoc Performance Metrics Report",
                  type: "Robot",
                  created: "Aug 9",
                  modified: "Aug 9",
                  actions: "View, Edit, Export",
                },
              ].map((report, index) => (
                <tr
                  key={report.name}
                  className={`${index % 2 === 0 ? "bg-white" : "bg-gray-50"}`}
                >
                  <td className="px-6 py-4 text-sm text-gray-800">
                    {report.name}
                  </td>
                  <td className="px-6 py-4 text-sm">
                    <span
                      className={`px-2 py-1 text-xs font-medium rounded-full ${
                        report.type === "Inspection"
                          ? "bg-blue-100 text-blue-600"
                          : report.type === "Preventative Maintenance"
                          ? "bg-green-100 text-green-600"
                          : "bg-yellow-100 text-yellow-600"
                      }`}
                    >
                      {report.type}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    {report.created}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    {report.modified}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    {report.actions}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Report Generator */}
        <div className="mt-8">
          <h3 className="text-lg font-bold mb-4">Report Generator</h3>
          <div className="space-y-4">
            {[
              {
                title: "Start from scratch",
                description:
                  "Customize a new report with the fields and filters of your choice",
                action: "Create",
              },
              {
                title: "Choose a template",
                description:
                  "Use a pre-built template as a starting point for your report",
                action: "Select",
              },
            ].map((option) => (
              <div
                key={option.title}
                className="flex items-center justify-between p-4 bg-white shadow rounded-lg"
              >
                <div>
                  <h4 className="text-sm font-medium">{option.title}</h4>
                  <p className="text-sm text-gray-600">{option.description}</p>
                </div>
                <button className="px-4 py-2 text-sm text-white bg-blue-500 rounded-md hover:bg-blue-600">
                  {option.action}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Report Activity */}
        <div className="mt-8">
          <h3 className="text-lg font-bold mb-4">Report Activity</h3>
          <div className="space-y-4">
            {[
              { name: "Daily Inspection Report", date: "Aug 13" },
              { name: "Weekly Preventative Maintenance Report", date: "Aug 11" },
            ].map((activity) => (
              <div
                key={activity.name}
                className="flex items-center space-x-4 text-sm text-gray-600"
              >
                <span className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center text-gray-500">
                  📄
                </span>
                <div>
                  <p>{activity.name}</p>
                  <p className="text-xs">{activity.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default ReportView;
