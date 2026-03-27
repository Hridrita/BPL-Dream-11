import React, { useState } from 'react';
import iconImg from '../../assets/user 1.png'
import flagImg from '../../assets/report 1.png'
import './AvailablePlayers.css'
import { toast } from 'react-toastify';


const AvailablePlayers = ({player,coin, setCoin, setSelectedPlayers, selectedPlayers}) => {

    const [isSelected, setIsSelected] = useState(false);

    const handleChoosePlayer = ()=> {
                 
                let newCoin = coin - player.price;

                if(newCoin >= 0){
                   setCoin(coin - player.price);
                }else{
                    toast.error("Not Enough Coin to Purchase This Player")
                    return;
                }

                toast.success(`${player.playername} is selected`);
                setIsSelected(true);

                setSelectedPlayers([...selectedPlayers, player])
            }

    //console.log(player)
    return (
        <div className="h-full">
            <div className="card bg-base-100 w-96 shadow-sm p-4">
  <figure className="h-50">
    <img className='w-full h-full object-cover' src={player.image} alt="Player Image" />
  </figure>
  <div className="card-body p-6 space-y-3 flex-grow">

    <h2 className="card-title font-bold"><img src={iconImg} width={20}></img>
        {player.playername}</h2>

        <div className='flex justify-between'>
            <p className='flex gap-2 text-[#131313FF;]'><img src={flagImg}className="w-5 h-5 object-contain"></img>{player.playercountry}</p>

            <h2 className='bg-gray-200 rounded-2xl p-2'>{player.playertype}</h2>

        </div>

        <hr className="border-gray-300" />

        <div className='flex justify-between'>
            <h3 className='font-bold text-xl'>Rating</h3>
          <h3 className='font-bold text-xl'>{player.rating}</h3>

        </div>

        <div className='flex justify-between'>
            <h2 className='font-bold'>{player.battingstyle}</h2>
            <h2 className='text-[#131313B2;]'>{player.blowingstyle}</h2>
        </div>

        <div className='flex justify-between'>
            <h2 className='font-bold'>Price:{player.price}</h2>

            <button onClick={handleChoosePlayer}
            disabled={isSelected == true ? true : false } 
            className="btn btn-outline btn-sm bg-transparent border border-gray-300 rounded-xl px-4 py-1">
                { isSelected === true ? "Selected" : "Choose Player"}
                </button>
        </div>

    </div>
</div>
        </div>
    );
};

export default AvailablePlayers;