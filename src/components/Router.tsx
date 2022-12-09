import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import TheAudioMachine from './TheAudioMachine'

const Router: React.FC = () => {
    return (
        <BrowserRouter>
            {/* <Header /> */}
            <Routes>
                {/* TODO: Fix this: https://reactjs.org/blog/2022/03/08/react-18-upgrade-guide.html */}
                <Route path='/*' element={<TheAudioMachine/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router
