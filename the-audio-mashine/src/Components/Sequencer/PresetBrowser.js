import React, {Component} from 'react';

class PresetBrowser extends Component {
    render() {
        return (
                <input type='file' onChange={(e) => this.props.loadPreset(e)}/>
        );
    }
}

export default PresetBrowser;