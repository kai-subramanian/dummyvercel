import React from 'react';
import FLNavbar from '../components/FLNavbar';
import { LineChart } from '@mui/x-charts';

const FleetOverview = () => {
  const xData = [1, 2, 3, 5, 8, 10, 12, 13, 15, 18]
  const yData = [2, 5.5, 2, 8.5, 2, 5.5, 2, 5.5, 2, 5.5]
  return (
    <div className="min-h-screen bg-gray-50 p-4">
      {/* Header
      <header className="flex items-center justify-between pb-4 border-b border-gray-200">
        <h1 className="text-xl font-semibold text-gray-800">Robot Control</h1>
        <nav className="flex space-x-4">
          {['Dashboard', 'Maps', 'Fleet', 'Tasks', 'Reports'].map((item) => (
            <button
              key={item}
              className="text-sm text-gray-500 hover:text-gray-700"
            >
              {item}
            </button>
          ))}
        </nav>
        <div className="flex items-center space-x-4">
          <button className="w-8 h-8 rounded-full bg-gray-300"></button>
          <button className="w-8 h-8 rounded-full bg-gray-200">
            <span className="sr-only">User menu</span>
          </button>
        </div>
      </header> */}
      <FLNavbar />

      {/* Content */}
      <main className="mt-6 md:px-20 px-2">
        {/* Fleet Overview Section */}
        <section>
          <h2 className="text-lg font-medium text-gray-700 mb-4">
            Fleet Overview
          </h2>
          <div className="mb-6">
            {/* Robot Tabs */}
            <div className="flex flex-col md:flex-row md:space-x-2 space-y-3 md:space-y-0 mb-4">
              {['Robot 1', 'Robot 2', 'Robot 3', 'Robot 4', 'Robot 5'].map(
                (robot) => (
                  <button
                    key={robot}
                    className="px-4 py-2 bg-gray-100 text-gray-600 text-sm rounded-md hover:bg-gray-200"
                  >
                    {robot}
                  </button>
                )
              )}
            </div>

            {/* Battery Level Chart */}
            <div className="bg-white shadow rounded-md p-6">
              <div className="h-40 flex items-center justify-center">
                {/* Placeholder for the Chart */}
                <div className="w-full h-full bg-gray-300 rounded-md flex items-center justify-center">
                  {/* <span className="text-gray-500 text-3xl">
                    Battery Level Chart Will Showup Here Once I Find A Good React Chart Library.
                  </span> */}
                  <LineChart
                    xAxis={[{ data: xData }]}
                    series={[
                      {
                        data: yData,
                      },
                    ]}
                    width={900}
                    height={200}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Actions */}
        <section>
          <h3 className="text-lg font-medium text-gray-700 mb-4">
            Quick Actions
          </h3>
          <div className="space-y-4">
            {[
              { action: 'Go to Position', description: 'Send a robot to a pre-defined position' },
              { action: 'Pause Task', description: 'Pause a task in progress' },
              { action: 'Resume Task', description: 'Resume a paused task' },
              { action: 'Stop Task', description: 'Stop a task in progress' },
            ].map(({ action, description }) => (
              <div
                key={action}
                className="flex items-center justify-between p-4 bg-white shadow rounded-md"
              >
                <div>
                  <h4 className="text-gray-800 font-medium">{action}</h4>
                  <p className="text-sm text-gray-500">{description}</p>
                </div>
                <button className="px-4 py-2 text-sm bg-blue-500 text-white rounded-md hover:bg-blue-600">
                  {action}
                </button>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default FleetOverview;
