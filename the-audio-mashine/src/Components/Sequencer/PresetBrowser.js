import React, {Component} from 'react';

class PresetBrowser extends Component {
    render() {
        return (
            <div className="PresetBrowser">
                <label>Load your Presets here:</label>
                <input type='file' onChange={(e) => this.props.loadPreset(e)}/>
            </div>
        );
    }
}

export default PresetBrowser;