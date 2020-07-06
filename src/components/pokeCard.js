import React, { useState, useEffect } from 'react';
import './../style/pokeCard.css'


export function PokeCard ({pokemon, addCartPokemons}) {

    const [ pokemonID, setPokemonID ] = useState('')

    useEffect(() => {
        if (!pokemon.id) {
            setPokemonID (pokemon.url.replace('https://pokeapi.co/api/v2/pokemon/','').replace('/',''))
        } else {
            setPokemonID(pokemon.id)
        }
    }, [pokemon]);

    return (
        <section>
            <div className="pokeCard">
                <div className="pokeImg">
                    <img src={`https://pokeres.bastionbot.org/images/pokemon/${pokemonID}.png`} alt={pokemon.name} title={pokemon.name} />
                </div>
                <div className="pokeTxt">
                    <div> <p>{pokemon.name}</p> </div>
                    <div> <p>R$ {(pokemonID * 3 / 9).toFixed(2)}</p> </div>
                </div>
                <div className="pokeButton">
                    <button type="button" onClick={() => addCartPokemons({...pokemon, id: pokemonID})} >Add PokeCart</button>
                </div>
            </div>
        </section>
    );
}