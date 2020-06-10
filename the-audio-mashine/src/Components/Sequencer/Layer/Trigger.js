import React, {Component} from 'react';

class Trigger extends Component {

    getStyle = () => {
        return this.props.checked ? this.props.style : this.props.style

    }

    render() {
        return (
            <span className={this.getStyle()} onClick={() => this.props.setTrigger(this)}>
            </span>
        );
    }
}

export default Trigger;