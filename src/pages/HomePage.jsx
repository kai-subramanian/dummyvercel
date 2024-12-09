import React from 'react'
import LandingPage from './LandingPage'
import KeyFeatures from './KeyFeatures'
import Subscribe from './Subscribe'
import Navbar from './Navbar'
import Footer from './Footer'
export const HomePage = () => {
    return (
        <div className='relative'>
            <div className="absolute z-10" >
                <Navbar />
            </div>
            <div className="absolute z-0" >
                <LandingPage></LandingPage>
            </div>

            {/* <KeyFeatures></KeyFeatures>
            <Subscribe></Subscribe> */}
            {/* <Footer /> */}
        </div>
    )
}
