import React, { use } from 'react';

const players = ({playerPromise}) => {
    console.log(playerPromise)

    const data = use(playerPromise)
    console.log(data);

    return (
        <div>
            
        </div>
    );
};

export default players;