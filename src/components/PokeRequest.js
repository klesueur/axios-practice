import React, { useState } from 'react';
import axios from 'axios';


const PokeRequest = () => {
    const [pokeArr, setPokeArr] = useState([]);

    const randomPokemon = () => {
        const randomNum = Math.ceil(Math.random() * 250);

        axios.get(`https://pokeapi.co/api/v2/pokemon/${randomNum}`)
            .then((res) => {
                const tempArr = [...pokeArr];

                tempArr.push(res.data);
                setPokeArr([...tempArr]);
                console.log(pokeArr)
            });
    };

    return (
        <div className='pokerequest-view'>
            <button className='random-btn' onClick={randomPokemon()}> Get Random Pokemon! </button>
            
        </div>
    );
};

export default PokeRequest;