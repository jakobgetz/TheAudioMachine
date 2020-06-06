import * as React from 'react';
import BPM from "./BPM";
import Layer from "./Layer/Layer";
import Player from "./Player";
import PresetBrowser from "./PresetBrowser";
import DefaultPreset from "../../Presets/DefaultPreset";
import SamplePicker from "../SamplePicker/Menu"

class Sequencer extends React.Component {

    state = DefaultPreset

    /**
     * Initializes the Sequencer right after the Component did mount
     */
    componentDidMount() {
        this.initLayers()
    }

    /**
     * Loads Presets
     * @param preset name of the preset
     */
    loadPreset = (preset) => {
        fetch('Presets/' + preset)
            .then(response => response.json())
            .then(json => this.setState(json, this.initLayers))
    }

    /**
     * initializes all Layers
     */
    initLayers = () => {
        let layers = this.state.layers

        layers = layers.map(item => {
            this.loadWaveFile(item.sampleFilePath)
                .then(sample => {
                    item.sample = sample
                    return item
                })
            return item
        })
        this.setState({layers: layers})
    }

    /**
     * Loads a sample to a layer which is selected in the File input next to a layer
     * @param e event in which the sample is contained
     * @param input the file input which contains the id of the layer to which the sample should be loaded
     */
    loadSample = (e, input) => {
        let layers = this.state.layers
        const file = e.target.files[0]
        const reader = new FileReader();
        reader.readAsArrayBuffer(file);
        reader.onload = function () {
            new AudioContext().decodeAudioData(reader.result).then(result => {
                layers = layers.map((item, i) => {
                    if (i === input.props.layerId - 1) {
                        item.sample = result
                        return item
                    } else {
                        return item
                    }
                })
            })
        }
    }

    /**
     * changes the rhythm of a layer to mach the displayed pattern of the website
     */
    setTrigger = currentTrigger => {
        let newRhythm = this.state.layers[currentTrigger.props.layerId - 1].rhythm
        newRhythm = newRhythm.map((trigger, i) => {
            if (currentTrigger.props.trigger.step === trigger.step) {
                if (trigger.velocity === 0) {
                    return {step: trigger.step, velocity: 100, pitch: trigger.pitch}
                } else {
                    return {
                        step: trigger.step,
                        velocity: 0,
                        pitch: trigger.pitch
                    }
                }
            } else {
                return {
                    step: trigger.step,
                    velocity: this.state.layers[currentTrigger.props.layerId - 1].rhythm[i].velocity,
                    pitch: trigger.pitch
                }
            }
        })
        let newLayers = this.state.layers
        newLayers = newLayers.map(layers => {
            if (currentTrigger.props.layerId === layers.layerId) {
                layers.rhythm = newRhythm
                return layers
            } else {
                return layers
            }
        })
        this.setState({layers: newLayers})
    }

    /**
     * Resets all set triggers by the user
     */
    resetTriggers = () => {
        let emptyLayers = this.state.layers.map(layer => {
                let rhythm = layer.rhythm
                layer.rhythm = rhythm.map(trigger => {
                    if (trigger.velocity !== 0) {
                        return {step: trigger.step, velocity: 0, pitch: trigger.pitch}
                    } else {
                        return trigger
                    }
                })
                return layer
            }
        )
        this.setState({layers: emptyLayers})
    }

    /**
     * Loads .wav Files via Filepath
     * @returns {*} loaded Samples
     */
    loadWaveFile = sampleFilePath => {
        return fetch(sampleFilePath)
            .then(response => response.arrayBuffer())
            .then(arrayBuffer => new AudioContext().decodeAudioData(arrayBuffer))
    }

    /**
     * sets BPM
     */
    setBPM = (event) => {
        this.setState({bpm: event.target.value})
    }

    render() {
        return (
            <div>
                <div>
                    <PresetBrowser loadPreset={this.loadPreset}/>
                </div>
                <br/>
                <BPM bpm={this.state.bpm} setBPM={this.setBPM}/>
                <SamplePicker sample={this.state.layers}/>

                {/*Creating the Layers*/}
                <div className="Layers">
                    {
                        this.state.layers.map((layer, i) =>
                            <Layer key={layer.layerId}
                                   layer={layer}
                                   layerCss={"Layer" + (i + 1)}
                                   setTrigger={this.setTrigger}
                                   loadSample={this.loadSample}/>)
                    }
                </div>
                {/*
                <AddLayer/>
                <RemoveLayer/>
                                */}

                <Player bpm={this.state.bpm} layers={this.state.layers} resetTriggers={this.resetTriggers}/>
            </div>
        )
    }
}

export default Sequencer;