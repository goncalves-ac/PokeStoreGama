import React from 'react';
import { useHistory } from "react-router-dom";
import logo from './../images/logo.svg';
import PokeStoreImg from './../images/PokeStore.png'
import './../style/home.css';

function Home () {

    const history = useHistory();
    const handleClick = () => { 
        history.push("/pokeStore"); 
    }
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <img src={PokeStoreImg} className="PokeStore" alt="PokeStore" />
                <button type="button" className="App-button" onClick={ handleClick } >Entrar</button>
            </header>
        </div>
    );
}

export default Home;
