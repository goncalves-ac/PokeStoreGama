import React from 'react';
import './../style/cart.css';
import '../style/modal.css'
import PokeCartImg from './../images/PokeCart.png';
import PokeModalImg from '../images/PokeModal.png';


export default function Cart ({ removePokemon, pokeCart, clearCart }) {

    function iniciaModal (modalID) {
        const modal = document.getElementById(modalID);
        if (modal) {
            modal.classList.add('openModal');
            modal.addEventListener('click', (e) => {
                if (e.target.id === modalID || e.target.className === 'closeModal') {
                    modal.classList.remove('openModal');
                    clearCart();
                }
            })
        }

    }

    function simulaPrice (pokemonID) {
        return (pokemonID * 3 / 9).toFixed(2);
    }

    let Total = 0;
    
    return (
        <section>
            <div className="cart">
                <div className="cartLogo">
                    <img src={PokeCartImg} alt="" />
                </div>
                <hr />

                <div className="pokeCompras">
                    {pokeCart ? pokeCart.map((pokeCorrent, index) => {
                        return (
                            <div className='cartBody' key={index}>
                                <div className="pokeInfo">
                                    <img src={`https://pokeres.bastionbot.org/images/pokemon/${pokeCorrent.id}.png`} alt={pokeCorrent.name} />
                                </div>
                                <div className="pokeInfo">
                                    <p>{ pokeCorrent.name }</p>
                                    <p>R$ { simulaPrice(pokeCorrent.id) }</p>
                                    <span>{ Total = Total + parseFloat(simulaPrice(pokeCorrent.id))}</span>
                                </div>
                                <div className="buttonClose">
                                    <button onClick={() => removePokemon(pokeCorrent)} > X </button>
                                </div>
                            </div>
                        );
                    }) : <div className="emptyCart"><p>Carrinho Vazio</p></div> }
                </div>

                <div className="cartFooter">
                    <div className="cartTotal">
                        <hr />
                        <p>Total: <strong> R$ { Total? Total.toFixed(2) : 0 }</strong></p>
                    </div>
                    <div className="cartButton">
                        <button type="button" id="finalizar" disabled={pokeCart.length !== 0 ? false : true } onClick={() => iniciaModal('IDdoModal')} >Finalizar</button>
                    </div>
                </div>
            </div>

            
            <div className="modalContainer" id="IDdoModal">
                <div className="modalTxt">
                    <button className="closeModal"> X </button>
                    <div className='modalCenter'>
                        <img src={PokeModalImg} alt='Compra realizada com sucesso' />
                        <h2 className="txtH2"> Obrigada pela sua PokeCompra.</h2>
                    </div>
                </div>
            </div>
        
        </section>
    );

}
