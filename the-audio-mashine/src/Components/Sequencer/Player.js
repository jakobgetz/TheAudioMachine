import React, {Component} from 'react';
import Button from 'react-bootstrap/Button';
import pauseIcon from '../../Assets/pause.svg';
import playIcon from '../../Assets/play.svg';
import binIcon from '../../Assets/bin.svg';
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';

class Player extends Component {

    playHeadPosition = 0
    isPlaying = false
    ctx
    masterGain
    layerGains
    audioBuffer = 0.01
    samplePlayer
    sampleGain
    limiter

    state = {
        currentVolume: 0.8,
        playingIcon: playIcon
    }
    export
    default
    Player;

    /**
     * Initializes the AudioContext right after the Component did mount
     * creates Mastergain
     * creates a Limiter with the Web Audio DynamicsCompressorNode
     * document.addEventListener listens to the spacebar of the user and plays the sequence
     */
    componentDidMount() {
        window.AudioContext = window.AudioContext || window.webkitAudioContext
        this.ctx = new AudioContext()
        this.masterGain = this.ctx.createGain()
        this.limiter = this.ctx.createDynamicsCompressor();
        this.setLimiter();
        this.masterGain.connect(this.limiter)
        this.masterGain.gain.setValueAtTime(this.state.currentVolume, this.ctx.currentTime)
        this.fillLayerGainArray();

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
     * Create an Array of length of the
     */
    fillLayerGainArray() {
        this.layerGains = new Array(this.props.layers.length)
        this.layerGains.fill(this.ctx.createGain())
    }

    /**
     * Starts/Stops the Playback
     */
    play = () => {
        if (this.isPlaying) {
            this.isPlaying = false
            this.masterGain.disconnect()
            this.playHeadPosition = 0
            this.setState({playingIcon: playIcon})
        } else {
            this.isPlaying = true
            this.setState({playingIcon: pauseIcon})
            this.masterGain.connect(this.ctx.destination)
            this.playSequence()
        }
    }

    /**
     * Plays the Sequence
     */
    playSequence = () => {
        this.samplePlayer = Array(this.props.layers.length)
        this.sampleGain = Array(this.props.layers.length)
        if (this.isPlaying) {
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
                this.sampleGain[i].connect(this.layerGains[i])
                this.layerGains[i].connect(this.masterGain)
                this.setVelocity(i)
                this.setPitch(i)
                this.setLayerGain(i)
                this.setLayerMute(i)
                this.samplePlayer[i].buffer = this.props.layers[i].sample
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
     * Sets Master Volume
     * @param e event in which the input gain is stored
     */
    setVolume = (volume) => {
        this.masterGain.gain.setValueAtTime(volume / 100, this.ctx.currentTime)
        this.setState({currentVolume: volume / 100})
    }


    render() {
        return (<div className="Player">
                <Button className="trashButton" onClick={this.props.resetTriggers}><img src={binIcon}
                                                                                        alt="Erase triggers "/></Button>
                <span className="playButton" onClick={this.play}><img
                    src={this.state.playingIcon}
                    className="playIcon"
                    alt="Play/Pause-Button"/></span>
                <input type='range' className="volumeSlider"
                       value={Math.round(this.state.currentVolume * 100)}
                       onChange={e => this.setVolume(e.target.value)}
                       onDoubleClick={() => this.setVolume(80)}/>
            </div>
        );
    }
}

export default Player;
