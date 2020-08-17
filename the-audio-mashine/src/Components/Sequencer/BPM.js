import React, {Component} from 'react';

class Bpm extends Component {
    state = {displayedBPM: this.props.bpm}
    maxSliderValue = 200
    sliderFactor = 30 / this.maxSliderValue

    /**
     * updates the global bpm when the enter is pressed
     * @param event event in which the value of the number field is stored
     */
    update = (event) => {
        if (event.key === 'Enter') {
            this.props.setBPM(event)
        }
    }

    /**
     * updates the value of the input so that the number field is writeable
     * @param event event in witch the input value is stored
     */
    handleChange = (event) => {
        this.setState({displayedBPM: event.target.value})
    }

    render() {
        return (
            <div className={"sliderBPM bpm"}>
                {/*
                <input type='number' value={this.state.displayedBPM} onChange={(e) => this.handleChange(e)}
                       onKeyDown={(e) => this.update(e)}/>
                <label>BPM</label>
                */}
                <input type={"range"} min={"50"}
                       max={this.maxSliderValue}
                       step={"1"}
                       value={this.props.bpm} onChange={(e) => this.props.setBPM(e)}
                       className={"slider"}/>
                <i className={"fas fa-heart bpm1"}/>
                <i className={"fas fa-heartbeat bpm2"}/>
                <div className={"fas sliderValue"}
                     style={{left: (this.props.bpm * this.sliderFactor) + 'vh'}}>{this.props.bpm} BPM
                </div>
            </div>


        );
    }
}

export default Bpm;
