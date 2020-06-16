import React, {Component} from 'react';

class SamplePicker extends Component {

    getStyle = layerId => {
        return this.props.isShown ? "sampleButtonC" + layerId : "sampleButton" + layerId
    }

    render() {
        const {layer, openPicker, loadSample, isShown, setLayerGain, setLayerMute} = this.props

        return (
            <div>
                <div className={this.getStyle(layer.layerId)} onClick={() => openPicker(layer.layerId)}>
                    {layer.name}
                </div>
                {isShown ?
                    <ul className="sampleFeatures">
                        <li>
                            <input type="file" onChange={(e) => loadSample(e, layer.layerId)}/>
                        </li>
                        <li>Solo</li>
                        <li>Mute
                            <input type="button"
                                   onClick={() => setLayerMute(layer.layerId)}/></li>
                        <li>Gain
                            <input type="range" onChange={(e) => setLayerGain(parseInt(e.target.value), layer.layerId)}
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