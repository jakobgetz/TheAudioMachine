import React from 'react'
import Header from "./Components/Header"
import "./CSS/mainStyles.scss"
import "./CSS2/main.scss"
import "./CSS2/fontawesome-free-5.13.0-web/css/all.min.css"
import BurgerMenu from "./Components/BurgerMenu"

function App() {
    return (
        <div>
            <Header/>
            <BurgerMenu/>
        </div>
    );
}

export default App;
