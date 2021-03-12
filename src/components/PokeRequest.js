import React, { useState } from 'react';
import axios from 'axios';


const PokeRequest = () => {
    const [pokeArr, setPokeArr] = useState([]);

    // useEffect(() => {
    //     axios.get(`https://pokeapi.co/api/v2/pokemon/78`)
    //         .then(res => {
    //             console.log(res)
    //         }).catch(err => {
    //             console.log(err)
    //         })
    // }, []);

    const randomPokemon = () => {
        const randomId = Math.ceil(Math.random() * 250);

        axios.get(`https://pokeapi.co/api/v2/pokemon/${randomId}`)
            .then((res) => {
                console.log(res)
            }).catch((err) => {
                console.log(err)
            })
    };

    return (
        <div className='pokerequest-view'>
            <button className='random-btn' onClick={() => randomPokemon()}> Get Random Pokemon! </button>
            <p></p>
        </div>
    ); 
};

export default PokeRequest;