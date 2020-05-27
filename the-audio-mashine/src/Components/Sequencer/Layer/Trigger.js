import React, {Component} from 'react';

class Trigger extends Component {

    render() {
        return (
                <input type='checkbox' checked={this.props.checked} onChange={() => this.props.setTrigger(this)}/>
        );
    }
}

export default Trigger;