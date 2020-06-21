import React, {Component} from 'react';

class SamplePicker extends Component {

    getStyle = layerId => {
        return this.props.isShown ? "sampleButtonC" + layerId : "sampleButton" + layerId
    }

    render() {
        const {layer, openPicker, loadSample, isShown, setLayerGain, setLayerMute, setLayerSolo} = this.props

        return (
            <div>
                <div className={this.getStyle(layer.layerId + 1)} onClick={() => openPicker(layer.layerId)}>
                    {layer.name}
                </div>
                {isShown ?
                    <ul className="sampleFeatures">
                        <li>
                            <input type="file" onChange={(e) => loadSample(e, layer.layerId)}/>
                        </li>
                        <li>
                            <input type="button"
                                   onClick={() => setLayerSolo(layer.layerId)}
                                   value="Solo"/>
                        </li>
                        <li>
                            <input type="button"
                                   onClick={() => setLayerMute(layer.layerId)}
                                   value="Mute"/>
                        </li>
                        <li>Gain
                            <input type="range" value={layer.layerGain}
                                   onChange={(e) => setLayerGain(parseInt(e.target.value), layer.layerId)}
                                   min="0"
                                   max="100"/></li>
                        <li>...</li>
                    </ul>
                    : null}
            </div>
        );
    }
}

export default SamplePicker;