import React, {Component} from "react";

    class AudioLoader extends Component {
        render() {
            return (
                <input type='file' layerid={this.props.layerId} onChange={(e) => this.props.loadSample(e, this)}/>
            )
        }
}


export default AudioLoader