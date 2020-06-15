import React, {Component} from 'react';
import SamplePicker from "./SamplePicker"

class SampleMenu extends Component {

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
        if (this.state.isShown[layerId - 1]) {
            isShown[layerId - 1] = false;
        } else {
            isShown[layerId - 1] = true;
        }
        this.setState({isShown});
    }


    render() {
        return (
            this.state ?
                <div className="sampleMenu">
                    {
                        this.props.layers.map((layer, i) =>
                            <SamplePicker key={layer.layerId}
                                          layer={layer}
                                          isShown={this.state.isShown[i]}
                                          openPicker={this.openPicker}
                                          loadSample={this.props.loadSample}
                                          setLayerGain={this.props.setLayerGain}/>
                        )
                    }
                </div>
                : null
        );
    }
}

export default SampleMenu;