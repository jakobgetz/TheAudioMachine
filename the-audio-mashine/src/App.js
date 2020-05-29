import React, {Component} from 'react';
import Sequencer from "./Components/Sequencer/Sequencer";
import Header from "./Components/Header";
import Library from "./Components/Library/Library";
import "./CSS/DefaultCSS.css"

class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Sequencer/>
                <Library/>
            </div>
        );
    }
}

export default App;