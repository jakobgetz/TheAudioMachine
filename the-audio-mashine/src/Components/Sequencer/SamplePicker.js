import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import AudioLoader from "./Layer/AudioLoader"

class SamplePicker extends Component {

    /*componentDidMount() {
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
    }*/
    // Onclick funktioniert nur ein mal danach nicht mehr
    /**
     * Reads value of clicked button which is used to get current values of the corresponding layer.
     * @param currentTarget The current button that was clicked.
     */




render() {
        return (
            <div>
                <button value="0" onClick={() => this.props.openPicker(this.props.layer.layerId)}>{this.props.layer.name}</button>
                {this.props.isShown ?
                <ul id={this.props.layer.layerId}>
                    <li><input type="file" onChange={(e) => this.props.loadSample(e, this.props.layer.layerId)}/></li>
                    <li>Solo</li>
                    <li>Mute</li>
                    <li>Gain</li>
                    <li>...</li>
                </ul>
                : null}
            </div>
        );
    }
}

export default SamplePicker;