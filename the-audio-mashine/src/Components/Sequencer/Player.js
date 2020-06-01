import React, {Component} from 'react';
import Button from 'react-bootstrap/Button';
import pauseIcon from '../../Assets/pause.svg';
import playIcon from '../../Assets/play.svg';
import stepBackIcon from '../../Assets/stepback.svg';
import binIcon from '../../Assets/bin.svg';
import RangeSlider from "react-bootstrap-range-slider";
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';

class Player extends Component {

    playHeadPosition = 0
    isPlaying = false
    ctx
    masterGain
    audioBuffer = 0.01
    samplePlayer

    state = {
        currentVolume: 0.8,
        playingIcon: playIcon
    }

    /**
     * Initializes the AudioContext right after the Component did mount
     */
    componentDidMount() {
        this.ctx = new AudioContext();
        this.masterGain = this.ctx.createGain()
        this.masterGain.gain.setValueAtTime(this.state.currentVolume, this.ctx.currentTime)
    }

    /**
     * Starts/Stops the Playback
     */
    play = () => {
        if (this.isPlaying) {
            this.isPlaying = false
            this.masterGain.disconnect()
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
        let layerLength = this.props.layers.length
        this.samplePlayer = Array(layerLength);
        if (this.isPlaying) {
            this.playHeadPosition %= this.props.layers[0].rhythm.length
            for (let i = 0; i < layerLength; i++) {
                if (this.props.layers[i].rhythm[this.playHeadPosition].velocity !== 0) {
                    this.samplePlayer[i] = this.ctx.createBufferSource();
                    this.samplePlayer[i].connect(this.masterGain);
                    this.samplePlayer[i].buffer = this.props.layers[i].sample;
                }
            }

            let playTime = this.ctx.currentTime + this.audioBuffer
            for (let i = 0; i < layerLength; i++) {
                if (this.props.layers[i].rhythm[this.playHeadPosition].velocity !== 0) {
                    this.samplePlayer[i].start(playTime);
                }
            }
            const timeout = 1000 / (this.props.bpm / 60 * 4)
            this.playHeadPosition++;
            setTimeout(this.playSequence, timeout)
        }
    }

    /**
     * Resets the playHeadPosition to 0
     */
    resetPlayHead = () => {
        this.playHeadPosition = 0
    }

    /**
     * Sets Master Volume
     * @param e event in which the input gain is stored
     */
    setVolume = (e) => {
        this.masterGain.gain.setValueAtTime(e.target.value / 100, this.ctx.currentTime)
        this.setState({currentVolume: e.target.value / 100})
    }

    render() {
        return (<div className="Player">
                <Button onClick={this.resetPlayHead}><img src={stepBackIcon}
                                                          alt="Step Back Icon"/></Button>
                <Button onClick={this.props.resetTriggers}><img src={binIcon}
                                                 alt="Erase triggers "/></Button>
                <Button onClick={this.play}><img src={this.state.playingIcon}
                                                 alt="Play/Pause Icon"/></Button>
                <RangeSlider className="CustomRangeSlider" size='sm'
                             value={Math.round(this.state.currentVolume * 100)}
                             onChange={changeEvent => this.setVolume(changeEvent)}/>
            </div>
        );
    }
}

export default Player;