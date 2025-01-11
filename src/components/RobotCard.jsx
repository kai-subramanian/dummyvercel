import { HeartIcon } from '@heroicons/react/24/outline'
import React, { useState } from 'react'

const RobotCard = (props) => {
    return (
        <>
            <div>
                <div class="max-w-96 rounded overflow-hidden shadow-lg">
                    <a href="/comingsoon">
                        <img class="w-full" src="https://placehold.co/135x120/pink/white?text=placeholder" alt="Robots" />
                        <div class="px-6 py-4 flex flex-row justify-between">
                            <div class="font-bold text-xl mb-2">Robot {props.title} Title Here</div>
                            <div className='size-6' style={{color:'red'}}><HeartIcon/></div>
                        </div>
                    </a>
                </div>
            </div>
        </>
    )
}

export default RobotCard