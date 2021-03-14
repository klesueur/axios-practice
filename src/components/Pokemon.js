import React from 'react';


const Pokemon = (props) => {
    const {id, name, sprites, types} = props.pokemon;
    console.log('props pokemon', props.pokemon)

    return (
        <div className='pokemon-card'>
            <div className='card-left-side'>
                <div className='card-header'>
                    <span className='main-identifiers'>
                        <p className='id-num'>#{id}</p>
                        <p className='divider'> | </p>
                        <h4 className='name'>{name}</h4>
                    </span>
                </div>
                <div className='card-description'>

                </div>
            </div>
            <div className='card-right-side'>
                <div className='pokemon-imgs'>
                    <img src={sprites.other["official-artwork"].front_default} />
                </div>
                <div className='chip-types'>
                    
                </div>
            </div>
        </div>
    );
};

export default Pokemon;