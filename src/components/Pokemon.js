import React from 'react';


const Pokemon = (props) => {
    const {id, name, sprites, types} = props.pokemon;

    return (
        <div className='pokemon-card'>
            <div className='card-header'>
                <h4>#{id}</h4>
                <h2>{name}</h2>
            </div>
            <div className='pokemon-imgs'>
                <img src={sprites.front_default} />
                <img src={sprites.back_default} />
            </div>
        </div>
    );
};

export default Pokemon;