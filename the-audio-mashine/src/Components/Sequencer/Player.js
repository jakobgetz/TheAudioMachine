import React, {Component} from 'react';

class Player extends Component {

    playHeadPosition = 0;
    isPlaying = false

    /**
     * Starts/Stops the Playback
     */
    play = () => {
        if (this.isPlaying) {
            this.isPlaying = false
            //this.setPlayButtonStyle();
        } else {
            this.isPlaying = true
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
                if (this.props.layers[i].rhythm[this.playHeadPosition].velocity == 100) {
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
        return (<div>
                <button onClick={this.resetPlayHead}>Back</button>
                <button onClick={this.play}>Play</button>
            </div>
        );
    }
}

export default Player;