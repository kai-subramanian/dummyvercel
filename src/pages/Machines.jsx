import React from 'react'
import MachineCard from '../components/MachineCard'
import FLNavbar from '../components/FLNavbar'
const Machines = () => {
    return (
        <>
        <FLNavbar></FLNavbar>
            <div className='text-center text-gray-500 text-3xl font-bold pt-10'>Machine Name</div>
            <div className='md:p-10'>
                <div className='flex-col grid md:grid-cols-3 grid-cols-1 md:flex-row gap-5 items-center p-10 py-12'>
                    <MachineCard></MachineCard>
                    <MachineCard></MachineCard>
                    <MachineCard></MachineCard>
                    <MachineCard></MachineCard>
                    <MachineCard></MachineCard>
                    <MachineCard></MachineCard>
                    <MachineCard></MachineCard>
                    <MachineCard></MachineCard>
                </div>
            </div>
        </>

    )
}

export default Machines