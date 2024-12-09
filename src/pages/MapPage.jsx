import React from 'react';
import WorldMap from '../components/WorldMap';
import FactoryCard from '../components/FactoryCard';
import CardOfCards from '../components/CardOfCards';
import FLNavbar from '../components/FLNavbar';
import Footer from './Footer';

function MainComponent() {
    const factoryData = [
        { name: 'Factory Name, City', info: 'Some basic info the client needs to know', city: 'City' },
    ];

    return (
        <>
            <FLNavbar></FLNavbar>
            <div className='bg-gray-900'>
                <div className='flex md:flex-row items-center py-2 flex-col md:gap-2 pl-24 gap-2'>
                    <WorldMap/>
                    <div className='flex flex-col max-h-[560px] pr-16 pl-16 pb-10 overflow-y-auto'>
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

    );
}

export default MainComponent;