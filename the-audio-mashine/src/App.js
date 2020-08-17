import React from 'react'
import BurgerMenu from "./components/BurgerMenu"
import Sequencer from "./components/sequencer/Sequencer";
import "./css/main.scss"
import "./css/fontawesome-free-5.13.0-web/css/all.min.css"

function App() {
    return (
        <div>
            {/*<Header/>*/}
            <BurgerMenu>
                <Sequencer/>
            </BurgerMenu>
        </div>
    );
}

export default App;
