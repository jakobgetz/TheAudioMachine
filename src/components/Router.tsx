import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import TheAudioMachine from './TheAudioMachine'

const Router: React.FC = () => {
    return (
        <BrowserRouter>
            {/* <Header /> */}
            <Routes>
                <Route path="/" element={<TheAudioMachine />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router
