import React, {Component} from 'react';
import SamplePicker from "./SamplePicker"
import {GlobalHotKeys} from "react-hotkeys";

class SampleMenu extends Component {
    keyMap = {
        LAYER_ID: ["1", "2", "3", "4", "5", "6"],
    };

    componentDidMount() {
        let isShown = new Array(this.props.layers.length)
        isShown = isShown.fill(false)
        this.setState({isShown: isShown})
    }

    /**
     * Reads value of clicked button which is used to get current values of the corresponding layer.
     * @param layerId
     */
    openPicker = (layerId) => {
        let isShown = this.state.isShown;
        isShown = isShown.map(() => false);
        isShown[layerId] = !this.state.isShown[layerId];
        this.setState({isShown});
    }

    checkLayerID = (keyboardEvent) => {
        let layerIDNumber = keyboardEvent.key.valueOf()
        if (layerIDNumber > 0 && layerIDNumber <= this.state.isShown.length) {
            this.openPicker(--layerIDNumber)
        }
    }

    handleKeyboardInput = {
        LAYER_ID: (event) => this.checkLayerID(event)
    }

    render() {
        return (
            this.state ?
                <GlobalHotKeys keyMap={this.keyMap} handlers={this.handleKeyboardInput}>
                    <div className="sampleMenu">
                        {
                            this.props.layers.map((layer, i) =>
                                <SamplePicker key={layer.layerId}
                                              layer={layer}
                                              isShown={this.state.isShown[i]}
                                              openPicker={this.openPicker}
                                              loadSample={this.props.loadSample}
                                              setLayerGain={this.props.setLayerGain}
                                              setLayerPan={this.props.setLayerPan}
                                              setLayerMute={this.props.setLayerMute}
                                              setLayerSolo={this.props.setLayerSolo}/>
                            )
                        }
                    </div>
                </GlobalHotKeys>
                : null
        );
    }
}

export default SampleMenu;
