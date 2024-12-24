import React from 'react'

const MachineCard = () => {
    return (
        <div>
            <div class="max-w-sm rounded overflow-hidden shadow-lg">
                <img class="w-full" src="https://placehold.co/135x120/black/white?text=placeholder" alt="Sunset in the mountains" />
                <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">Machine Name</div>
                </div>
                <div class="px-6 pt-4 pb-2">
                    <button class="inline-block bg-gray-100 rounded-xl px-3 py-2 text-sm font-semibold text-gray-900 mr-2 mb-2 border-2 border-gray-900">Inspect Now</button>
                </div>
            </div>
        </div>
    )
}

export default MachineCard