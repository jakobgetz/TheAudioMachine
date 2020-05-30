import React, {Component} from 'react';
import Button from 'react-bootstrap/Button';
import pauseIcon from '../../Assets/pause.svg';
import playIcon from '../../Assets/play.svg';
import stepBack from '../../Assets/stepback.svg';

class Player extends Component {

    playHeadPosition = 0;
    isPlaying = false

    state = {
        playingIcon: pauseIcon
    }

    /**
     * Starts/Stops the Playback
     */
    play = () => {
        if (this.isPlaying) {
            this.isPlaying = false
            this.setState({playingIcon: playIcon})
            //this.setPlayButtonStyle();
        } else {
            this.isPlaying = true
            this.setState({playingIcon: pauseIcon})
            this.playSequence()
            //this.setPlayButtonStyle();
        }
    }

    /**
     * Plays the Sequence
     */
    playSequence = () => {
        let samplePlayer = Array(this.props.layers.length);
        if (this.isPlaying) {
            this.playHeadPosition %= this.props.layers[0].rhythm.length
            for (let i = 0; i < this.props.layers.length; i++) {
                if (this.props.layers[i].rhythm[this.playHeadPosition].velocity === 100) {
                    samplePlayer[i] = this.props.ctx.createBufferSource();
                    samplePlayer[i].connect(this.props.ctx.destination);
                    samplePlayer[i].buffer = this.props.layers[i].sample;
                    samplePlayer[i].start(this.props.ctx.currentTime);
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

    render() {
        return (<div className="Player">
                <Button onClick={this.resetPlayHead}><img src={stepBack}
                                                          alt="Step Back Icon"/></Button>
                <Button onClick={this.play}><img src={this.state.playingIcon}
                                                 alt="Play Icon"/></Button>
            </div>
        );
    }
}

export default Player;