import React, {Component} from 'react';

class SamplePicker extends Component {

    symbols = ["fas fa-shoe-prints", "fas fa-shoe-prints", "fas fa-shoe-prints", "fas fa-shoe-prints", "fas fa-shoe-prints", "fas fa-shoe-prints"]

    getStyle = layerId => {
        return this.props.isShown ? "sidenav__button-selected-" + layerId : "sidenav__button-" + layerId
    }

    getMuteStyle = layerId => {
        if (this.props.isShown) {
            return this.props.layer.isMute ? "extra active-selected-" + layerId + " sidenav__button-mute-selected" : "extra sidenav__extra-" + layerId + " sidenav__button-mute"
        } else {
            return this.props.layer.isMute ? "extra inactive-selected-" + layerId + " sidenav__button-mute-selected" : "extra sidenav__extra-" + layerId + " sidenav__button-mute"
        }
    }

    getSoloStyle = layerId => {
        if (this.props.isShown) {
            return this.props.layer.isSolo ? "extra active-selected-" + layerId + " sidenav__button-solo-selected" : "extra sidenav__extra-" + layerId + " sidenav__button-solo"
        } else {
            return this.props.layer.isSolo ? "extra inactive-selected-" + layerId + " sidenav__button-solo-selected" : "extra sidenav__extra-" + layerId + " sidenav__button-solo"
        }
    }

    render() {
        const {layer, openPicker, loadSample, isShown, setLayerGain, setLayerPan, setLayerMute, setLayerSolo} = this.props

        return (
            <div className={this.getStyle(layer.layerId)}>
                <div className={"sidenav__name"}>{layer.name}</div>
                <div className={"symbol sidenav__symbol-" + layer.layerId} onClick={() => openPicker(layer.layerId)}>
                    <i className={this.symbols[layer.layerId]}></i>
                </div>

                <div className="sidenav__box">
                    <div className={this.getMuteStyle(layer.layerId)} onClick={() => setLayerMute(layer.layerId)}>M</div>

                    <div className={this.getSoloStyle(layer.layerId)} onClick={() => setLayerSolo(layer.layerId)}>S</div>
                </div>

                {isShown ?
                    <ul className="sampleFeatures">
                        <li>
                            <input type="file" onChange={(e) => loadSample(e, layer.layerId)}/>
                        </li>
                        <li>Gain
                            <input type="range" value={layer.layerGain}
                                   onChange={e => setLayerGain(parseInt(e.target.value), layer.layerId)}
                                   onDoubleClick={() => setLayerGain(80, layer.layerId)}
                                   min="0"
                                   max="100"/></li>
                        <li>Pan
                            <input type="range" value={layer.layerPan}
                                   onChange={e => setLayerPan(parseInt(e.target.value), layer.layerId)}
                                   onDoubleClick={() => setLayerPan(0, layer.layerId)}
                                   min="-50"
                                   max="50"/></li>
                        <li>...</li>
                    </ul>
                    : null}
            </div>
        );
    }
}

export default SamplePicker;