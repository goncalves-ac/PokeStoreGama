import React from 'react';
import './../style/rodape.css';
import PokeBallImg from './../images/PokeBall.png'


function Rodape () {
    
    return (
        <section>
            <div className="rodape">
                <div className="rodapeLogo">
                    <img src={PokeBallImg} alt="PokeBall" title="PokeBall" />
                    <p>Desenvolvido por - <span>Ana Carolina Gonçalves</span></p>
                </div>
            </div>
        </section>
    );
}

export default Rodape;