import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import Inicio from './view/Inicio'

export default function Rotas() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Inicio} />
                <Redirect path="*" to="/" />
            </Switch>
        </BrowserRouter>
    )
} 