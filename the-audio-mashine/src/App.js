import React from 'react';
import Header from "./Components/Header";
import "./CSS/mainStyles.scss"
import "./CSS2/main.scss"
import BurgerMenu from "./Components/BurgerMenu";

function App() {
    return (
        <div>
            <Header/>
            <BurgerMenu/>
        </div>
    );
}

export default App;
