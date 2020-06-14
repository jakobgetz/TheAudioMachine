import React, {Component} from 'react';
import Layer from "./Layer";

class Sequence extends Component {
    render() {
        return (
                <div className="layer">
                    {
                        this.props.layers.map(layer =>
                            <Layer key={layer.layerId}
                                   layer={layer}
                                   setTrigger={this.props.setTrigger}/>)
                    }
                </div>
        );
    }
}

export default Sequence;