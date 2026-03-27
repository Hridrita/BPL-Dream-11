import React from 'react';
import { MdDelete } from "react-icons/md";
import { FaUser } from "react-icons/fa";

const SelectedPlayers = ({ selectedPlayers, setSelectedPlayers, coin, setCoin }) => {

    const handleDeleteSelectedPlayer = (player) =>{
        console.log(player);
        const filteredPlayers = selectedPlayers.filter((select) => select.playername !== player.playername);

        console.log(filteredPlayers);

        setSelectedPlayers(filteredPlayers);
        setCoin(coin + player.price);
    }
    return (
        <div className="space-y-4"> 
            {
                selectedPlayers.map((player, index) => (
                    <div key={index} className='flex items-center justify-between p-4 rounded-2xl border bg-white shadow-sm'>
                        <div className='flex items-center gap-6'>
                            <img src={player.image} alt={player.playername} className='h-20 w-20 object-cover rounded-xl' />
                            <div>
                                <h2 className='font-bold text-xl'>{player.playername}</h2>
                                <p className='text-gray-500'>{player.playertype}</p>
                            
                            </div>
                        </div>
                        <button onClick={() => handleDeleteSelectedPlayer(player)} className="text-red-500 text-3xl p-2 hover:bg-red-50 rounded-full transition-all">
                            <MdDelete />
                        </button>
                    </div>
                ))
            }
        </div>
    );
};

export default SelectedPlayers;