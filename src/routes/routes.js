import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

/** ROTAS */
import Home from '../pages/home.js'
import PokeStore from '../pages/pokeStore.js';


export default function Routes () {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path={['/', '/home']} component={Home} />
                <Route exact path='/pokeStore' component={PokeStore} />
            </Switch>
        </BrowserRouter>
    )
}