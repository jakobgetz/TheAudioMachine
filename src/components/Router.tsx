import React from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'

import TheAudioMachine from './TheAudioMachine'

const Router: React.FC = () => {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<TheAudioMachine />} />
            </Routes>
        </HashRouter>
    )
}

export default Router
