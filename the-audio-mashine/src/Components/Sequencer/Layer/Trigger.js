import React, {Component} from 'react';

class Trigger extends Component {

    isPressed = false
    prevMousePosition

    getStyle = () => {
        return this.props.checked ? "wrapper-selected-" + this.props.trigger.step : "wrapper-" + this.props.trigger.step

    }

    startChangeVelocity = (e) => {
        //console.log(e)
        this.prevMousePosition = e.screenY
        if (this.props.trigger.velocity !== 0) {
            this.isPressed = true
        }
    }

    changeVelocity = (e) => {
        if (this.isPressed) {
            let mouseMovement = this.prevMousePosition - e.screenY
            this.props.setVelocity(this.props.layerId, this.props.trigger.step, mouseMovement)
            this.prevMousePosition = e.screenY
        }
    }

    stopChangeVelocity = () => {
        this.isPressed = false
        console.log(this.isPressed)
    }


    render() {
        return (
            <div className={this.getStyle()}>
                <div className={"note"}
                     onClick={() => this.props.setTrigger(this)}
                     onMouseDown={e => this.startChangeVelocity(e)}
                     /*onMouseMove={this.changeVelocity}
                     onMouseUp={this.stopChangeVelocity}*/>
                </div>
            </div>

        );
    }
}

export default Trigger;
