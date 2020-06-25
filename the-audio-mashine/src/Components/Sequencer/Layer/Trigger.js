import React, {Component} from 'react';
import Knob from 'react-canvas-knob';

class Trigger extends Component {

    isPressed = false
    prevMousePosition

    getStyle = () => {
        return this.props.checked ? "checked" : "unchecked"

    }

    /*
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
    */


    render() {
        return (
            <span>
                <span className={this.getStyle()}>
                    <input type='range'
                           min={0}
                           max={127}
                           value={this.props.trigger.velocity}
                           onChange={e => this.props.setVelocity(this.props.layerId, this.props.trigger.step, e.target.value)}
                           onDoubleClick={() => this.props.setTrigger(this)}/>
                    {/*<span>
                        <Knob value={this.props.trigger.velocity}
                        onChange={this.changeVelocity}/>
                    </span>
                    {/*
                    <span onClick={() => this.props.setTrigger(this)}
                          onMouseDown={e => this.startChangeVelocity(e)}
                          onMouseMove={this.changeVelocity}
                          onMouseUp={this.stopChangeVelocity}>
                    </span>
                    */}
                </span>
            </span>
        );
    }
}

export default Trigger;