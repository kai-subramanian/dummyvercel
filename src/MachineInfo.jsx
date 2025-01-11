import React from 'react'
import FLNavbar from './components/FLNavbar'
import MachineInfoCard from './components/MachineInfoCard'
import FactoryCard from './components/FactoryCard'
import { CameraIcon } from '@heroicons/react/24/outline'

const MachineInfo = () => {
    const factoryData = [
        { name: 'Factory Name, City', info: 'Some basic info the client needs to know', city: 'City' },
    ];
    return (
        <>
            <div>
                <FLNavbar></FLNavbar>
                {/* This section for text and button */}
                <div className='flex flex-row md:flex-col'>
                    <div className='flex flex-col md:flex-row text-gray-500 text-3xl font-bold md:px-32 px-6 md:pt-10 md:pb-10 pt-5 pb-5 justify-between'>
                        Machine Name & Number Goes Here
                        <div className='float-right font-light text-xl py-2 md:py-0'>
                            <button className='bg-blue-600 text-white rounded-lg px-5 py-1 flex flex-row'><CameraIcon className='size-8 flex my-auto pr-3'></CameraIcon>Inspect Now</button>
                        </div>
                    </div>
                </div>
                {/* This section for info card */}
                <div className='flex md:flex-row items-center align-baseline justify-center flex-col'>
                    <div className='md:w-3/4'>
                        <MachineInfoCard></MachineInfoCard>
                    </div>
                    {/* <div className='w-1/12'></div> */}
                    <div className='flex flex-col max-h-[520px] gap-3 w-auto md:mr-32 align-baseline overflow-y-auto'>
                        <FactoryCard factoryData={factoryData[0]} />
                        <FactoryCard factoryData={factoryData[0]} />
                        <FactoryCard factoryData={factoryData[0]} />
                        <FactoryCard factoryData={factoryData[0]} />
                        <FactoryCard factoryData={factoryData[0]} />
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
            </div>
        </>
    )
}

export default MachineInfo