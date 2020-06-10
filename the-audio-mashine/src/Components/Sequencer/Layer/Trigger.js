import React, {Component} from 'react';

class Trigger extends Component {

    getStyle = () => {
        return this.props.checked ? this.props.styleChecked : this.props.styleUnchecked

    }

    render() {
        return (
            <span className={this.getStyle()}>
                <span onClick={() => this.props.setTrigger(this)}>
                </span>
            </span>
        );
    }
}

export default Trigger;