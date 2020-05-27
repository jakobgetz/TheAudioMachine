import React, {Component} from 'react';

class Bpm extends Component {

    state = {displayedBPM: this.props.bpm}

    /**
     * updates the global bpm when the enter is pressed
     * @param event event in which the value of the number field is stored
     */
    update = (event) => {
        if (event.key == 'Enter') {
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
            <div>
                <input type='number' value={this.state.displayedBPM} onChange={(e) => this.handleChange(e)}
                       onKeyDown={(e) => this.update(e)}/>bpm
            </div>
        );
    }
}

export default Bpm;