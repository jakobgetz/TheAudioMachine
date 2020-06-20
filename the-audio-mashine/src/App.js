import React from 'react';
import Sequencer from "./Components/Sequencer/Sequencer";
import Header from "./Components/Header";
import "./CSS/mainStyles.scss"
import BurgerMenu from "./Components/BurgerMenu";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import {Route} from 'react-router-dom'

function App() {
    return (
        <div>
            <Header/>
            <BurgerMenu/>
            <Route exact path='/'><Sequencer/></Route>
            <Route exact path='/about'><About/></Route>
            <Route exact path='/contact'><Contact/></Route>
        </div>
    );
}

export default App;
