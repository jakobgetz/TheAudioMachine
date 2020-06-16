import * as React from 'react';
import BPM from "./BPM";
import Player from "./Player";
import PresetBrowser from "./PresetBrowser";
import SampleMenu from "./SampleMenu/SampleMenu";
import Sequence from "./Layer/Sequence";

class Sequencer extends React.Component {

    state = {
        bpm: 120,
        layers: [
            {
                layerId: 1,
                name: 'Kick',
                sampleFilePath: './DefaultSamples/Kick.wav',
                layerGain: 80,
                isMute: false,
                rhythm: [
                    {step: 0, velocity: 0, pitch: 1},
                    {step: 1, velocity: 0, pitch: 1},
                    {step: 2, velocity: 0, pitch: 1},
                    {step: 3, velocity: 0, pitch: 1},
                    {step: 4, velocity: 0, pitch: 1},
                    {step: 5, velocity: 0, pitch: 1},
                    {step: 6, velocity: 0, pitch: 1},
                    {step: 7, velocity: 0, pitch: 1},
                    {step: 8, velocity: 0, pitch: 1},
                    {step: 9, velocity: 0, pitch: 1},
                    {step: 10, velocity: 0, pitch: 1},
                    {step: 11, velocity: 0, pitch: 1},
                    {step: 12, velocity: 0, pitch: 1},
                    {step: 13, velocity: 0, pitch: 1},
                    {step: 14, velocity: 0, pitch: 1},
                    {step: 15, velocity: 0, pitch: 1}
                ]
            },
            {
                layerId: 2,
                name: "Snare",
                sampleFilePath: "/DefaultSamples/Snare.wav",
                layerGain: 80,
                isMute: false,
                rhythm: [
                    {step: 0, velocity: 0, pitch: 1},
                    {step: 1, velocity: 0, pitch: 1},
                    {step: 2, velocity: 0, pitch: 1},
                    {step: 3, velocity: 0, pitch: 1},
                    {step: 4, velocity: 0, pitch: 1},
                    {step: 5, velocity: 0, pitch: 1},
                    {step: 6, velocity: 0, pitch: 1},
                    {step: 7, velocity: 0, pitch: 1},
                    {step: 8, velocity: 0, pitch: 1},
                    {step: 9, velocity: 0, pitch: 1},
                    {step: 10, velocity: 0, pitch: 1},
                    {step: 11, velocity: 0, pitch: 1},
                    {step: 12, velocity: 0, pitch: 1},
                    {step: 13, velocity: 0, pitch: 1},
                    {step: 14, velocity: 0, pitch: 1},
                    {step: 15, velocity: 0, pitch: 1}
                ]
            },
            {
                layerId: 3,
                name: "Clap",
                sampleFilePath: "/DefaultSamples/Clap.wav",
                layerGain: 80,
                isMute: false,
                rhythm: [
                    {step: 0, velocity: 0, pitch: 1},
                    {step: 1, velocity: 0, pitch: 1},
                    {step: 2, velocity: 0, pitch: 1},
                    {step: 3, velocity: 0, pitch: 1},
                    {step: 4, velocity: 0, pitch: 1},
                    {step: 5, velocity: 0, pitch: 1},
                    {step: 6, velocity: 0, pitch: 1},
                    {step: 7, velocity: 0, pitch: 1},
                    {step: 8, velocity: 0, pitch: 1},
                    {step: 9, velocity: 0, pitch: 1},
                    {step: 10, velocity: 0, pitch: 1},
                    {step: 11, velocity: 0, pitch: 1},
                    {step: 12, velocity: 0, pitch: 1},
                    {step: 13, velocity: 0, pitch: 1},
                    {step: 14, velocity: 0, pitch: 1},
                    {step: 15, velocity: 0, pitch: 1}
                ]
            },
            {
                layerId: 4,
                name: "Hat",
                sampleFilePath: "/DefaultSamples/Hat.wav",
                layerGain: 80,
                isMute: false,
                rhythm: [
                    {step: 0, velocity: 0, pitch: 1},
                    {step: 1, velocity: 0, pitch: 1},
                    {step: 2, velocity: 0, pitch: 1},
                    {step: 3, velocity: 0, pitch: 1},
                    {step: 4, velocity: 0, pitch: 1},
                    {step: 5, velocity: 0, pitch: 1},
                    {step: 6, velocity: 0, pitch: 1},
                    {step: 7, velocity: 0, pitch: 1},
                    {step: 8, velocity: 0, pitch: 1},
                    {step: 9, velocity: 0, pitch: 1},
                    {step: 10, velocity: 0, pitch: 1},
                    {step: 11, velocity: 0, pitch: 1},
                    {step: 12, velocity: 0, pitch: 1},
                    {step: 13, velocity: 0, pitch: 1},
                    {step: 14, velocity: 0, pitch: 1},
                    {step: 15, velocity: 0, pitch: 1}
                ]
            },
            {
                layerId: 5,
                name: "Crash",
                sampleFilePath: "/DefaultSamples/Crash.wav",
                layerGain: 80,
                isMute: false,
                rhythm: [
                    {step: 0, velocity: 0, pitch: 1},
                    {step: 1, velocity: 0, pitch: 1},
                    {step: 2, velocity: 0, pitch: 1},
                    {step: 3, velocity: 0, pitch: 1},
                    {step: 4, velocity: 0, pitch: 1},
                    {step: 5, velocity: 0, pitch: 1},
                    {step: 6, velocity: 0, pitch: 1},
                    {step: 7, velocity: 0, pitch: 1},
                    {step: 8, velocity: 0, pitch: 1},
                    {step: 9, velocity: 0, pitch: 1},
                    {step: 10, velocity: 0, pitch: 1},
                    {step: 11, velocity: 0, pitch: 1},
                    {step: 12, velocity: 0, pitch: 1},
                    {step: 13, velocity: 0, pitch: 1},
                    {step: 14, velocity: 0, pitch: 1},
                    {step: 15, velocity: 0, pitch: 1}
                ]
            },
            {
                layerId: 6,
                name: "Voc",
                sampleFilePath: "/DefaultSamples/Ayy.wav",
                layerGain: 80,
                isMute: false,
                rhythm: [
                    {step: 0, velocity: 0, pitch: 1},
                    {step: 1, velocity: 0, pitch: 1},
                    {step: 2, velocity: 0, pitch: 1},
                    {step: 3, velocity: 0, pitch: 1},
                    {step: 4, velocity: 0, pitch: 1},
                    {step: 5, velocity: 0, pitch: 1},
                    {step: 6, velocity: 0, pitch: 1},
                    {step: 7, velocity: 0, pitch: 1},
                    {step: 8, velocity: 0, pitch: 1},
                    {step: 9, velocity: 0, pitch: 1},
                    {step: 10, velocity: 0, pitch: 1},
                    {step: 11, velocity: 0, pitch: 1},
                    {step: 12, velocity: 0, pitch: 1},
                    {step: 13, velocity: 0, pitch: 1},
                    {step: 14, velocity: 0, pitch: 1},
                    {step: 15, velocity: 0, pitch: 1}
                ]
            }
        ]
    }

    componentDidMount() {
        this.initLayers();
    }

    setPreset = (preset) => {
        this.setState(preset, () => this.initLayers())
    }

    /**
     * sets layer gain of layer knob to specific layer
     * @param volume
     * @param layerId
     */
    setLayerGain = (volume, layerId) => {
        let layers = this.state.layers
        layers = layers.map((layer, i) => {
            if (layerId === i) {
                layer.layerGain = volume;
            }
            return layer
        })
        this.setState({layers: layers});
    }

    setLayerMute = (layerId) => {
        let layers = this.state.layers;
        layers = layers.map((layer, i) => {
            if (layerId - 1 === i) {
                layer.isMute = !layer.isMute;
            }
            return layer;
        })
        this.setState({layers: layers});
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
     * @param layerId the file input which contains the id of the layer to which the sample should be loaded
     */
    loadSample = (e, layerId) => {
        let layers = this.state.layers
        const file = e.target.files[0]
        const reader = new FileReader();
        reader.readAsArrayBuffer(file);
        reader.onload = function () {
            new AudioContext().decodeAudioData(reader.result).then(result => {
                layers = layers.map((item, i) => {
                    if (i === layerId - 1) {
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
        const layers = this.state.layers
        let newRhythm = layers[currentTrigger.props.layerId - 1].rhythm
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
        let newLayers = layers
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
            this.state ?
                <div className="sequencer">
                    <PresetBrowser setting={this.state} setPreset={this.setPreset} savePreset={this.savePreset}/>

                    <BPM bpm={this.state.bpm} setBPM={this.setBPM}/>

                    <SampleMenu layers={this.state.layers}
                                loadSample={this.loadSample}
                                setLayerGain={this.setLayerGain}
                                setLayerMute={this.setLayerMute}/>

                    <Sequence layers={this.state.layers} setTrigger={this.setTrigger}/>

                    <Player bpm={this.state.bpm} layers={this.state.layers} resetTriggers={this.resetTriggers}/>

                </div>
                : null
        )
    }
}

export default Sequencer;