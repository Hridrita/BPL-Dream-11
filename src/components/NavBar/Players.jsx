import React, { use, useState } from 'react';
import AvailablePlayers from './AvailablePlayers';
import SelectedPlayers from './SelectedPlayers';

const players = ({playerPromise, coin, setCoin}) => {
    console.log(playerPromise)

    const players = use(playerPromise)
    console.log(players);

    const [selectedType, setSelectedType] = useState("available");
    const [selectedPlayers, setSelectedPlayers] = useState([]); 

    return (
        <div className='container mx-auto px-4 my-10'>
            <div className='flex justify-between gap-4 items-center my-15'>
                {
                    selectedType === "available" ? <h2 className='font-bold text-3xl'>Available Players</h2> : <h2 className='font-bold text-3xl'>Selected Players ({selectedPlayers.length} / {players.length})</h2>
                }

                <div className='gap-3'>
                    <button onClick={()=> setSelectedType("available")} className={`btn ${selectedType === "available" ? "bg-[#E7FE29]" : ""} rounded-r-none rounded-l-xl`}>Available</button>

                    <button onClick={()=> setSelectedType("selected")} className={`btn ${selectedType === "selected" ? "bg-[#E7FE29]" : ""} rounded-l-none rounded-r-xl`}>Selected({selectedPlayers.length})</button>
                </div>
            </div>
            <div className={selectedType === "available" ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" : "block"}>
    {
        selectedType === "available" ? (
            
            players.map(player => (
                <AvailablePlayers 
                    key={player.id} 
                    player={player} 
                    setCoin={setCoin} 
                    coin={coin} 
                    selectedPlayers={selectedPlayers} 
                    setSelectedPlayers={setSelectedPlayers} 
                />
            ))
        ) : (
        
            <SelectedPlayers selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers} coin={coin} setCoin={setCoin}/>
        )
    }
</div>

            
        </div>
    );
};

export default players;