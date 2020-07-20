import React, {Component} from 'react';
import {GlobalHotKeys} from "react-hotkeys";

class Player extends Component {
    playHeadPosition = 0
    isPlaying = false
    ctx
    masterGain
    layerGains
    layerPans
    audioBuffer = 0.01
    samplePlayer
    sampleGain
    limiter
    isRecordingOnce = false;
    isExporting = this.props.isExporting
    dest

    mediaRecorder
    doRecordSequence = false
    recordedSequences = []
    state = {
        currentVolume: 0.8,
        playingIcon: "fas fa-play"
    }
    keyMap = {
        PLAY: "space",
        RESET_PLAYHEAD_POSITION: "escape"
    };

    animation = {}
    /**
     * Initializes the AudioContext right after the Component did mount
     * creates Mastergain
     * creates a Limiter with the Web Audio DynamicsCompressorNode
     */
    componentDidMount() {
        window.AudioContext = window.AudioContext || window.webkitAudioContext
        this.ctx = new AudioContext()
        // First Node
        this.masterGain = this.ctx.createGain()
        // Second Node
        this.limiter = this.ctx.createDynamicsCompressor();
        this.setLimiter();
        this.masterGain.connect(this.limiter)
        this.masterGain.gain.setValueAtTime(this.state.currentVolume, this.ctx.currentTime)
        this.fillLayerGainArray();
        this.fillLayerPanArray()

        this.dest = this.ctx.createMediaStreamDestination()
        this.mediaRecorder = new MediaRecorder(this.dest.stream)
        this.limiter.connect(this.dest)
    }

    /**
     * Sets the Values of the Compressor, which is routed as a limiter between master and ctx.destination
     * */
    setLimiter() {
        this.limiter.threshold.setValueAtTime(-6, this.ctx.currentTime);
        this.limiter.knee.setValueAtTime(0, this.ctx.currentTime);
        this.limiter.ratio.setValueAtTime(10, this.ctx.currentTime);
        this.limiter.attack.setValueAtTime(0, this.ctx.currentTime);
        this.limiter.release.setValueAtTime(0.25, this.ctx.currentTime);
    }

    /**
     * Create an Array and fill it with one Gain Node per Layer
     */
    fillLayerGainArray() {
        this.layerGains = new Array(this.props.layers.length)
        for (let i = 0; i < this.props.layers.length ; i++) {
            this.layerGains[i] = this.ctx.createGain()
        }
    }

    /**
     * Create an Array and fill it with one StereoPan Node per Layer
     */
    fillLayerPanArray() {
        this.layerPans = new Array(this.props.layers.length)
        for (let i = 0; i < this.props.layers.length ; i++) {
            this.layerPans[i] = this.ctx.createStereoPanner()
        }
    }

    /**
     * Resets the playhead position to 0
     */
    resetPlayHeadPosition = () => {
        this.playHeadPosition = 0
    }

    /**
     * sets the boolean for the recording to true and connects the limiter to the MediaStreamDestination
     */
    recordSequence = () => {
        this.doRecordSequence = true
        this.limiter.connect(this.dest)
    }

    /**
     * Starts a recording, that lasts one length of the loop
     */
    recordOnce = () => {
        this.isRecordingOnce = true;
        this.doRecordSequence = true
        if (this.isPlaying) {
            this.resetPlayHeadPosition()
            this.recordSequence()
        } else {
            this.play()
            this.recordSequence()
        }
    }

    /**
     * Stops the current recording and initiates the download of the generated .wav file
     */
    stopRecording = () => {
        this.doRecordSequence = false
        document.getElementById("rec").style.backgroundColor = "#252525";
        this.mediaRecorder.ondataavailable = (evt) => {
            this.recordedSequences.push(evt.data);
        }
        this.mediaRecorder.onstop = () => {
            // Make blob out of our blobs, and open it.
            let blob = new Blob(this.recordedSequences, {'type': 'audio/wav; codecs=0'});
            this.recordedSequences = [];


            let link = window.document.createElement('a');
            link.href = window.URL.createObjectURL(blob);
            //set to link.download
            link.download = 'TheAudioMachine.wav';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

        }
    }

    /**
     * Starts/Stops the Playback
     */
    play = () => {
        if (this.isPlaying) {
            this.isPlaying = false
            this.limiter.disconnect()
            this.resetPlayHeadPosition()
            this.animation = {}
            this.setState({playingIcon: "fas fa-play"})
            if (this.mediaRecorder.state === "recording") {
                this.mediaRecorder.stop()
                this.stopRecording()
            }
        } else {
            this.isPlaying = true
            this.animation = {animation: "animate " + 60 / this.props.bpm * 4 + "s linear infinite"}
            this.setState({playingIcon: "fas fa-pause"})
            this.limiter.connect(this.ctx.destination)
            if (this.mediaRecorder.state === "inactive" && this.doRecordSequence) {
                this.mediaRecorder.start()
            }
            this.playSequence()
        }
    }

    /**
     *
     * @type {{PLAY: (function(): void), RESET_PLAYHEAD_POSITION: (function(): void)}}
     */
    handleKeyboardInput = {
        PLAY: () => this.play(),
        RESET_PLAYHEAD_POSITION: () => this.resetPlayHeadPosition()
    };

    /**
     * Plays the Sequence
     */
    playSequence = () => {
        this.samplePlayer = Array(this.props.layers.length)
        this.sampleGain = Array(this.props.layers.length)
        if (this.isPlaying) {
            if (this.playHeadPosition === 16 && this.isRecordingOnce) {
                this.isRecordingOnce = false;
                this.mediaRecorder.stop()
                this.stopRecording()
                this.play()
            }
            this.playHeadPosition %= this.props.layers[0].rhythm.length
            this.setUpNodes()
            this.playBackSamples()
            const timeout = 1000 / (this.props.bpm / 60 * 4)
            this.playHeadPosition++;

            setTimeout(this.playSequence, timeout)
        }
    }

    /**
     * Sets up all nodes
     */
    setUpNodes = () => {
        for (let i = 0; i < this.props.layers.length; i++) {
            if (this.props.layers[i].rhythm[this.playHeadPosition].velocity !== 0) {
                this.samplePlayer[i] = this.ctx.createBufferSource()
                this.sampleGain[i] = this.ctx.createGain()
                this.samplePlayer[i].connect(this.sampleGain[i])
                this.sampleGain[i].connect(this.layerPans[i])
                this.layerPans[i].connect(this.layerGains[i])
                this.layerGains[i].connect(this.masterGain)
                this.setVelocity(i)
                this.setPitch(i)
                this.setLayerGain(i)
                this.setLayerPan(i)
                this.setLayerMute(i)
                try {
                    this.samplePlayer[i].buffer = this.props.layers[i].sample
                } catch (e) {
                    //handles the error so that the site does not crash when you skip through the presets
                }
            }
        }

    }

    /**
     * Sets the Gain of a played Back sample (Velocity)
     * @param i index of the current layer
     */
    setVelocity = i => {
        this.sampleGain[i].gain.setValueAtTime(this.props.layers[i].rhythm[this.playHeadPosition].velocity / 127, this.ctx.currentTime)
    }

    /**
     * Sets the Pitch of a played Back sample
     * @param i index of the current layer
     */
    setPitch = i => {
        this.samplePlayer[i].playbackRate.value = this.props.layers[i].rhythm[this.playHeadPosition].pitch
    }

    /**
     * Sets the Gain of a Layer
     * @param i index of the current layer
     */
    setLayerGain = i => {
        this.layerGains[i].gain.value = (this.props.layers[i].layerGain / 100)
    }

    /**
     * Sets the Pan of a Layer
     * @param i index of the current layer
     */
    setLayerPan = i => {
        this.layerPans[i].pan.setValueAtTime(this.props.layers[i].layerPan / 50, this.ctx.currentTime)
    }

    /**
     * Sets the isMute boolean of a Layer
     * @param i index of the current layer
     */
    setLayerMute = i => {
        if (this.props.layers[i].isMute) {
            this.samplePlayer[i].disconnect();
        } else {
            this.layerGains[i].connect(this.masterGain);
        }
    }

    /**
     * Plays back the current samples at the Playhead Position
     */
    playBackSamples = () => {
        let playTime = this.ctx.currentTime + this.audioBuffer
        for (let i = 0; i < this.props.layers.length; i++) {
            if (this.props.layers[i].rhythm[this.playHeadPosition].velocity !== 0) {
                this.samplePlayer[i].start(playTime);
            }
        }
    }

    /**
     * Sets master volume
     * @param volume is the parameter for the output volume
     */
    setVolume = (volume) => {
        this.masterGain.gain.setValueAtTime(volume / 100, this.ctx.currentTime)
        this.setState({currentVolume: volume / 100})
    }

    render() {
        return (
            <GlobalHotKeys keyMap={this.keyMap} handlers={this.handleKeyboardInput}>
                <div className={"playhead "} style={this.animation}></div>
                <div className={"sliderVolume volume"}>
                    <input type='range' className="slider"
                           value={Math.round(this.state.currentVolume * 100)}
                           onChange={e => this.setVolume(e.target.value)}
                           onDoubleClick={() => this.setVolume(80)}/>
                    <i className={"fas fa-volume-off vol1"}></i>
                    <i className={"fas fa-volume-up vol2"}></i>
                </div>
                <div className="player">
                    <div className="player__play-button" onClick={this.play}>
                        <i className={this.state.playingIcon}/>
                    </div>

                    {/*<div className="player__trash-button" onClick={this.props.resetTriggers}/>
                    <div className="player__volume-knob"/>
                    */}

                    {/*<button onClick={() => this.recordSequence()}>Record</button>*/}
                </div>
            </GlobalHotKeys>
        );
    }
}

export default Player;
