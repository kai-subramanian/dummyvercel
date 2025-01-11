import React from 'react'
import RobotCard from '../components/RobotCard'
import FLNavbar from '../components/FLNavbar'

const RobotPage = () => {
    const n = 16;
    return (
        <>
            <FLNavbar></FLNavbar>
            <div className='text-center text-gray-500 text-3xl font-bold pt-10'>Robots</div>
            <div className='md:p-10'>
                <div className='flex-col grid md:grid-cols-3 grid-cols-1 md:flex-row gap-5 items-center p-10'>
                    {Array.from({ length: n }, (_, index) => (
                        <RobotCard key={index} title={index + 1} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default RobotPage