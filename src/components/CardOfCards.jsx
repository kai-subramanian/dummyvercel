import React from 'react'
import FactoryCard from './FactoryCard'

const CardOfCards = () => {

    const factoryData = [
        { name: 'Factory Name, City', info: 'Some basic info the client needs to know', city: 'City' },
    ];
    return (
        <div>
            <div className='flex flex-col p-12 overflow-y-scroll'>
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
        </div>
    )
}

export default CardOfCards