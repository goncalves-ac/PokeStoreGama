import React, { useState } from 'react';
import './../style/navBar.css';
import PokeStoreImg from './../images/PokeStore.png';
import PokePesquisaImg from './../images/pokePesq.png';
import AllPokeImg from './../images/allPoke.png'


function NavBar ({ onPesquisa }) {
    const [ pokemonName, setPokemonName ] = useState('')
    
    return (

        <section>
            <div className='navBar'>
                <div className="navBarLogo">
                    <img src={PokeStoreImg} title="Logo Pokemon" alt="Logo Pokemon" />
                </div>
                <div className="navBarPesquisa">
                    <input className="pokemonInput" placeholder="Nome do Pokemon" value={pokemonName} onChange={ e => setPokemonName(e.target.value)} />
                    <button type="button" onClick={() => onPesquisa(pokemonName)} >
                        <img src={PokePesquisaImg} alt="Lupa de Pesquisa" />
                    </button>
                    <button type="button" onClick={() => onPesquisa()} >
                        <img src={AllPokeImg} alt="Lupa de Pesquisa" />
                    </button>
                </div>
            </div>
        </section>
    );
}

export default NavBar;
