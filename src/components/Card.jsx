import React from 'react'

const Card = (props) => {
    return (
        <div class="max-w-sm rounded overflow-hidden">
            <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">{props.title}</div>
                <p class="text-gray-700 text-base">
                    {props.data}
                </p>
            </div>
        </div>
    )
}

export default Card