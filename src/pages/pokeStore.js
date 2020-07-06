import React, { useState, useEffect } from 'react';
import './../style/pokeStore.css';
import { namePokemon, Pokemons } from '../services/api';
import axios from 'axios';

/** Import dos Componentes */
import NavBar from './../components/navBar';
import Rodape from './../components/rodape';
import Cart from './../components/cart';
import ButtonNavegation from './../components/buttonNavegation';
import { PokeCard } from '../components/pokeCard';


function PokeStore() {
    const [allPokemons, setAllPokemons] = useState([]);
    const [searchPokemon, setSearchPokemon] = useState(null);
    const [cartPokemons, setCartPokemons] = useState([]);
    const [nextPokemons, setNextPokemons] = useState('');
    const [previousPokemons, setPreviousPokemons] = useState('');

    
    function addCartPokemons(pokemon) {
        setCartPokemons([...cartPokemons, pokemon])        
    }

    function clearCart () {
        setCartPokemons([]);
    }

    function handlePesquisa(pokemonName) {
        if (!pokemonName) {
            setSearchPokemon(null);
        } else {
            namePokemon(pokemonName).then(response => {
                console.log(response)
                setSearchPokemon(response)
            });
        }
    }

    function getPokemons() {
        Pokemons(8, 0).then(result => {
            console.log(result)
            setAllPokemons(result.data.results);
            setNextPokemons(result.data.next);
            setPreviousPokemons(result.data.previous);
        });
    }

    function getNextPokemons() {
        axios.get(nextPokemons).then(result => {
            setAllPokemons(result.data.results);
            setNextPokemons(result.data.next);
            setPreviousPokemons(result.data.previous);
        });
    };

    function getPreviousPokemons() {
        axios.get(previousPokemons).then(result => {
            setAllPokemons(result.data.results);
            setNextPokemons(result.data.next);
            setPreviousPokemons(result.data.previous);
        });
    };

    useEffect(() => {
        getPokemons();
    }, []);

    function removePokemon(pokemon) {
	    let selectedIndex = cartPokemons.findIndex(pokemonInCart => pokemonInCart.id === pokemon.id);
	    setCartPokemons(
		    cartPokemons.filter((pokemonInCart, index) => index !== selectedIndex)
	    );
    }

    

    return ( 
        < section >
            <NavBar onPesquisa = { handlePesquisa }/> 
            <Cart pokeCart = { cartPokemons } removePokemon={ removePokemon } clearCart={ clearCart } />

                <div className = "bodyPokeStore" >
                    {!searchPokemon && allPokemons ? allPokemons.map((pokemon, index) =>
                    <PokeCard pokemon = { pokemon } key = {index} addCartPokemons = { addCartPokemons }/>
                    ) : (searchPokemon ? < PokeCard pokemon = { searchPokemon } addCartPokemons = { addCartPokemons }/> 
                        : <p> Não Encontrado </p>) } 
                </div> 

            <ButtonNavegation getNextPokemons = { getNextPokemons } getPreviousPokemons = { getPreviousPokemons }/>
            <Rodape />
        </section>
    );
}

export default PokeStore;
