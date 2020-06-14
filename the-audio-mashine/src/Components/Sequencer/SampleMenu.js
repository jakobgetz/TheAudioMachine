import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import AudioLoader from "./Layer/AudioLoader"
import SamplePicker from "./SamplePicker"

class SampleMenu extends Component {

    state = {isShown: [false, false, false, false, false, false]};

    componentDidMount() {
        document.addEventListener('click', this.handleClickOutside, true);
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.handleClickOutside, true);
    }

    handleClickOutside = event => {
        const domNode = ReactDOM.findDOMNode(this);

        if (!domNode || !domNode.contains(event.target)) {
            console.log("hallo");
        }
    }
    // Onclick funktioniert nur ein mal danach nicht mehr
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
            <div>
                {
                    this.props.layers.map((layer, i) =>
                        <SamplePicker key={layer.layerId}
                                      layer={layer}
                                      isShown={this.state.isShown[i]}
                                      openPicker={this.openPicker}
                                      loadSample={this.props.loadSample}/>
                    )
                }
            </div>
        );
    }
}

export default SampleMenu;