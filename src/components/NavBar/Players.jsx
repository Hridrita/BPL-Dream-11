import React, { use, useState } from 'react';
import AvailablePlayers from './AvailablePlayers';
import SelectedPlayers from './SelectedPlayers';

const players = ({playerPromise, coin, setCoin}) => {
    console.log(playerPromise)

    const players = use(playerPromise)
    console.log(players);

    const [selectedType, setSelectedType] = useState("available"); 

    return (
        <div className='container mx-auto px-4 my-10'>
            <div className='flex justify-between gap-4 items-center my-15'>
                {
                    selectedType === "available" ? <h2 className='font-bold text-3xl'>Available Players</h2> : <h2 className='font-bold text-3xl'>Selected Players (2/6)</h2>
                }

                <div className='gap-3'>
                    <button onClick={()=> setSelectedType("available")} className={`btn ${selectedType === "available" ? "bg-[#E7FE29]" : ""} rounded-r-none rounded-l-xl`}>Available</button>

                    <button onClick={()=> setSelectedType("selected")} className={`btn ${selectedType === "selected" ? "bg-[#E7FE29]" : ""} rounded-l-none rounded-r-xl`}>Selected(0)</button>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                players.map(player => selectedType === "available" ? <AvailablePlayers player={player} setCoin={setCoin} coin={coin}></AvailablePlayers> : <SelectedPlayers></SelectedPlayers>)
            }

            </div>

            
        </div>
    );
};

export default players;