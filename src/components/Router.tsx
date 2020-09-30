import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
// import Header from './Header'

import TheAudioMachine from './TheAudioMachine'

const Router: React.FC = () => {
    return (
        <BrowserRouter>
            {/* <Header /> */}
            <Switch>
                <Route exact path='/' component={TheAudioMachine}></Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Router
