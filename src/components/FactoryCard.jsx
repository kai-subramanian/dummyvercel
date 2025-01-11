import React from 'react';

function FactoryCard({ factoryData }) {
  return (
    <div className="bg-gray-100 rounded-lg p-3 mb-4 align-baseline">
      <h2 className=" text-gray-950 text-lg font-bold">{factoryData.name}</h2>
      <p className=" text-gray-800">{factoryData.city}</p>
      <p className=" text-gray-800">{factoryData.info}</p>
      <div className="flex items-center mt-2">
        <p className=" text-gray-800">11.11.2024 16:20:77 EST</p>
        {/* <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2">
          Ongoing
        </button> */}
        <div className='text-blue-600 underline px-2'>
          <a href="/login">Ongoing</a>
        </div>
        <a href='/machineinfo/:machineId'>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-5 rounded ml-2">
            View
          </button>
        </a>
      </div>
    </div>
  );
}

export default FactoryCard;