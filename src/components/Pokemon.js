import React from 'react';


const Pokemon = (props) => {
    const {sprites, name} = props.pokemon;

    return (
        <div className='pokemon-view'>
            <h2>{name}</h2>
            <img src={sprites.front_default} />
            <img src={sprites.back_default} />
        </div>
    );
};

export default Pokemon;