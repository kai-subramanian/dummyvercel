import React from 'react'
import Card from '../components/Card'

const KeyFeatures = () => {
  return (
    <div>
        <h1 style={{textAlign:'center'}} className='md:text-6xl font-bold text-3xl py-12 md:py-5'>
            Key Features
        </h1>

        <div className='flex md:flex-row flex-col justify-around md:px-28 md:py-12 px-5 py-6'>
            <Card title="Real Time" data="Stay updated with live data feeds and alerts "></Card>
            <Card title="Connect & Collaborate" data="Seamlessly interact with teams anytime, anywhere"></Card>
            <Card title="Intelligent Insights" data="Gain deep insights through advanced analytics"></Card>
            <Card title="Expand your Radar" data="Broaden your awareness with global data tracking"></Card>
        </div>
    </div>
  )
}

export default KeyFeatures