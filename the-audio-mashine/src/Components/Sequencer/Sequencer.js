import * as React from 'react';
import BPM from "./BPM";
import Player from "./Player";
import PresetBrowser from "./PresetBrowser";
import SampleMenu from "./SampleMenu/SampleMenu";
import Sequence from "./Layer/Sequence";
import HeaderButtons from "./HeaderButtons";
import Footer from "./Footer";

class Sequencer extends React.Component {

    mouseDown = false

    state = {
        bpm: 120,
        layers: [
            {
                layerId: 0,
                name: 'Kick',
                sampleFilePath: '/DefaultSamples/Kick.wav',
                layerGain: 80,
                layerPan: 0,
                isMute: false,
                isSolo: false,
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
                layerId: 1,
                name: "Snare",
                sampleFilePath: "/DefaultSamples/Snare.wav",
                layerGain: 80,
                layerPan: 0,
                isMute: false,
                isSolo: false,
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
                name: "Clap",
                sampleFilePath: "/DefaultSamples/Clap.wav",
                layerGain: 80,
                layerPan: 0,
                isMute: false,
                isSolo: false,
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
                name: "Hat",
                sampleFilePath: "/DefaultSamples/Hat.wav",
                layerGain: 80,
                layerPan: 0,
                isMute: false,
                isSolo: false,
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
                name: "Crash",
                sampleFilePath: "/DefaultSamples/Crash.wav",
                layerGain: 80,
                layerPan: 0,
                isMute: false,
                isSolo: false,
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
                name: "Voc",
                sampleFilePath: "/DefaultSamples/Ayy.wav",
                layerGain: 80,
                layerPan: 0,
                isMute: false,
                isSolo: false,
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
        window.AudioContext = window.AudioContext || window.webkitAudioContext
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

    /**
     * sets layer pan of specific layer
     * @param pan
     * @param layerId
     */
    setLayerPan = (pan, layerId) => {
        let layers = this.state.layers
        layers = layers.map((layer, i) => {
            if (layerId === i) {
                layer.layerPan = pan
            }
            return layer
        })
        this.setState({layers: layers})
    }

    /**
     * Mutes or unmutes the Layer based on the layerID.
     * @param layerId Identifies the layer to be muted.
     */
    setLayerMute = (layerId) => {
        let layers = this.state.layers;
        layers = layers.map((layer, i) => {
            if (layerId === i) {
                layer.isMute = !layer.isMute;
            }
            return layer;
        })
        this.setState({layers: layers});
    }

    /**
     * The layer that is chosen via layerId will play in solo.
     * Another click will "unsolo" it again.
     * If another Layer is chosen the layers will play at the same time.
     * If there is no longer a layer labeled as "Solo" every Layer will be unmuted.
     * @param layerId Identifies the layer to be muted.
     */
    setLayerSolo = (layerId) => {
        let layers = this.state.layers;
        layers = layers.map((layer, i) => {
            if (layerId === i) {
                layer.isSolo = !layer.isSolo
            }
            layer.isMute = !layer.isSolo;
            return layer;
        })

        //If there are no Solo-Tracks present unmute all layers
        let helper = 0;
        for (let i = 0; i < layers.length; i++) {
            if (layers[i].isSolo) {
                helper++
            }
        }
        if (helper === 0) {
            for (let i = 0; i < layers.length; i++) {
                layers[i].isSolo = false;
                layers[i].isMute = false;
            }
        }

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
                    if (i === layerId) {
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
        let newRhythm = layers[currentTrigger.props.layerId].rhythm
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
                    velocity: this.state.layers[currentTrigger.props.layerId].rhythm[i].velocity,
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
     * sets the velocity of a trigger
     */
    setVelocity = (layerId, step, value) => {
        //console.log('layerId: ' + layerId + ' step: ' + step + ' value: ' + value)
        let layers = this.state.layers.map(layer => {
            if (layer.layerId === layerId) {
                layer.rhythm = layer.rhythm.map(trigger => {
                    if (trigger.step === step) {
                        trigger.velocity = value
                    }
                    return trigger
                })
            }
            return layer
        })
        console.log(layers[0].rhythm)
        this.setState({layers: layers})
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
                    <HeaderButtons/>
                    <PresetBrowser setting={this.state} setPreset={this.setPreset} savePreset={this.savePreset} resetTriggers={this.resetTriggers}/>

                    <BPM bpm={this.state.bpm} setBPM={this.setBPM}/>

                    <SampleMenu layers={this.state.layers}
                                loadSample={this.loadSample}
                                setLayerGain={this.setLayerGain}
                                setLayerPan={this.setLayerPan}
                                setLayerMute={this.setLayerMute}
                                setLayerSolo={this.setLayerSolo}/>

                    <Sequence layers={this.state.layers} setTrigger={this.setTrigger} setVelocity={this.setVelocity}/>

                    <Player bpm={this.state.bpm} layers={this.state.layers} resetTriggers={this.resetTriggers}/>

                    <Footer/>
                </div>
                : null
        )
    }
}

export default Sequencer;
