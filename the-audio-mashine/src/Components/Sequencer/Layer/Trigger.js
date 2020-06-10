import React, {Component} from 'react';

class Trigger extends Component {

    getStyle = () => {
        return this.props.checked ? "checked" : "unchecked"

    }

    render() {
        return (
            <span>
                <span className={this.getStyle()}>
                    <span onClick={() => this.props.setTrigger(this)}>
                    </span>
                </span>
            </span>
        );
    }
}

export default Trigger;