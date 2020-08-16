import React from 'react'
import BurgerMenu from "./Components/BurgerMenu"
import Sequencer from "./Components/Sequencer/Sequencer";
import "./CSS3/main.scss"
import "./CSS2/fontawesome-free-5.13.0-web/css/all.min.css"

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
