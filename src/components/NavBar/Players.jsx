import React, { use } from 'react';
import AvailablePlayers from './AvailablePlayers';

const players = ({playerPromise}) => {
    console.log(playerPromise)

    const players = use(playerPromise)
    console.log(players);

    return (
        <div className='container mx-auto px-4 my-10'>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                players.map(player => <AvailablePlayers player={player}></AvailablePlayers>)
            }

            </div>

            
        </div>
    );
};

export default players;