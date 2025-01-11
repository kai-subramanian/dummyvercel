import React from 'react'

const MachineCard = () => {
    // placeholder for now, fetch this data from the API via axios
    const machines = [
        {
            "id": 0,
            "name": "Machine 1",
            "speciality": "Wizard"
        },
        {
            "id": 1,
            "name": "Crag Hack",
            "speciality": "Viking"
        },
        {
            "id": 2,
            "name": "Silvio",
            "speciality": "Warrior"
        }
    ];
    return (
        <div>
            <div class="max-w-sm rounded overflow-hidden shadow-lg mb-20">
                <a href="/machineinfo">
                    <img className="w-full size-72" src="https://placehold.co/135x120/black/white?text=Placeholder" alt="Sunset in the mountains" />
                    <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2">Machine Name</div>
                    </div>
                </a>
                <div class="px-6 pt-4 pb-2">
                    <a class="inline-block bg-gray-100 rounded-xl px-3 py-2 text-sm font-semibold text-gray-900 mr-2 mb-2 border-2 border-gray-900" href="/inspectionform">Inspect Now</a>
                </div>
            </div>
        </div>
    )
}

export default MachineCard