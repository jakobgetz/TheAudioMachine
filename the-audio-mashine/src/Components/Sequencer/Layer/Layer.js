import React, {Component} from 'react';
import Trigger from "./Trigger";
import AudioLoader from "./AudioLoader";

class Layer extends Component {

    /**
     * Returns if the checkbox regarding the current Preset is checked or not
     * @param i index of the checkbox which has to be checked
     * @returns {boolean} weither the checkbox is checked or not
     */
    isChecked = (i) => {
        if (this.props.layer.rhythm[i].velocity != 0) {
            return true
        } else {
            return false
        }
    }

    render() {
        return (
            <div>
                {
                    this.props.layer.rhythm.map((trigger, i) =>
                        <Trigger key={trigger.step}
                                 layerId={this.props.layer.layerId}
                                 checked={this.isChecked(i)}
                                 trigger={trigger}
                                 setTrigger={this.props.setTrigger}/>
                    )
                }
                <AudioLoader key={this.props.layer.layerId}
                             layerId={this.props.layer.layerId}
                             loadSample={this.props.loadSample}/>
                {this.props.layer.name}
            </div>
        )
    }
}

export default Layer;