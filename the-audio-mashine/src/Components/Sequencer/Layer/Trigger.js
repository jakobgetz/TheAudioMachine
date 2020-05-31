import React, {Component} from 'react';

class Trigger extends Component {

    getStyle = () => {
        return this.props.checked ? "Trigger Checked" : "Trigger"

    }

    render() {
        return (
            <span className={this.getStyle()} onClick={() => this.props.setTrigger(this)}>
            </span>
        );
    }
}

export default Trigger;