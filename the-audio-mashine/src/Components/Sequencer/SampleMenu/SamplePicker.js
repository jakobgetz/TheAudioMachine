import React, {Component} from 'react';

class SamplePicker extends Component {

    getStyle = layerId => {
        return this.props.isShown ? "sampleButtonC" + layerId : "sampleButton" + layerId
    }

    render() {
        const {layer, openPicker, loadSample, isShown} = this.props

        return (
            <div>
                <div className={this.getStyle(layer.layerId)} onClick={() => openPicker(layer.layerId)}>
                    {layer.name}
                </div>
                {isShown ?
                    <ul className="sampleFeatures">
                        <li><input type="file" onChange={(e) => loadSample(e, layer.layerId)}/>
                        </li>
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