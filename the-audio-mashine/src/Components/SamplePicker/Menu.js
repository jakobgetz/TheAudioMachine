import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import AudioLoader from "../Sequencer/Layer/AudioLoader"

class Menu extends Component {

    state = {sample: this.props}

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);

    }



    componentDidMount() {
        document.addEventListener('click', this.handleClickOutside, true);
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.handleClickOutside, true);
    }

    handleClickOutside = event => {
        const domNode = ReactDOM.findDOMNode(this);

        if (!domNode || !domNode.contains(event.target)) {
            try {
                document.getElementById("SubSettings").remove();
            } catch {
                console.log("No Submenu is open.")
            }
        }
    }
    // Onclick funktioniert nur ein mal danach nicht mehr
    /**
     * Reads value of clicked button which is used to get current values of the corresponding layer.
     * @param currentTarget The current button that was clicked.
     */
    handleClick({currentTarget}) {
        console.log(currentTarget.value);
        console.log(this.state.sample.sample[currentTarget.value]);

        //If there's already a file input present then delete it and create a new one
        if(document.getElementById("SubSettings")){
            document.getElementById("SubSettings").remove();
            document.getElementById(currentTarget.id).parentElement.innerHTML += '<ul id="SubSettings"><li><input type="file"/></li><li>Solo</li><li>Mute</li><li>Gain</li><li>...</li></ul>'
        } else {
            document.getElementById(currentTarget.id).parentElement.innerHTML += '' +
                '<ul id="SubSettings"><li><input type="file"/></li><li>Solo</li><li>Mute</li><li>Gain</li><li>...</li></ul>'
        }

    }



render() {
        return (
            <div className="SampleMenu">
                <ul className="LayerButtons">
                    <li>
                        <button id="L1Button" className="Layer1" value="0" onClick={this.handleClick}>Kick</button>
                    </li>
                    <li>
                        <button id="L2Button" className="Layer2" value="1" onClick={this.handleClick}>Snare</button>
                    </li>
                    <li>
                        <button id="L3Button" className="Layer3" value="2" onClick={this.handleClick}>Clap</button>
                    </li>
                    <li>
                        <button id="L4Button" className="Layer4" value="3" onClick={this.handleClick}>Hat</button>
                    </li>
                    <li>
                        <button id="L5Button" className="Layer5" value="4" onClick={this.handleClick}>Crash</button>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Menu;