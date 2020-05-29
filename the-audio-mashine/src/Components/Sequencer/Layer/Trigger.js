import React, {Component} from 'react';

class Trigger extends Component {

    render() {
        return (
            <span className="Trigger">
                <input type='checkbox' checked={this.props.checked} onChange={() => this.props.setTrigger(this)}/>
            </span>
        );
    }
}

export default Trigger;