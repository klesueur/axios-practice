import React, { useState } from 'react';
import axios from 'axios';
import Pokemon from './Pokemon';


const PokeRequest = () => {
    const [pokeArr, setPokeArr] = useState([]);


    const randomPokemon = () => {
        const randomId = Math.ceil(Math.random() * 250);

        axios.get(`https://pokeapi.co/api/v2/pokemon/${randomId}`)
            .then((res) => {
                console.log(res)
                const tempArr = [...pokeArr]
                tempArr.push(res.data)
                setPokeArr([...tempArr])
            }).catch((err) => {
                console.log(err)
            })
    };

    const mappedPokemon = pokeArr.map((pokemon, index) => {
        return <Pokemon pokemon={pokemon} />
    });

    return (
        <div className='pokerequest-view'>
            <button className='random-btn' onClick={() => randomPokemon()}> Get Random Pokemon! </button>
            <div></div>
        </div>
    ); 
};

export default PokeRequest;