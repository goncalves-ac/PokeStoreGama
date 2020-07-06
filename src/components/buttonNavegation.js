import React from 'react';
import './../style/buttonNavegation.css';

function ButtonNavegation ({ getNextPokemons, getPreviousPokemons}) {
    return (
        <section>
            <div className='navegation'>
                <div className='anterior'><button onClick={getPreviousPokemons} >Anterior</button></div>
                <div className='proximo'><button onClick={getNextPokemons} >Próximo</button></div>
            </div>
        </section>
    );
};

export default ButtonNavegation;