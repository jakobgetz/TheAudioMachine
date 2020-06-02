import React, {Component} from 'react';

class PresetBrowser extends Component {

    state = {
        presets: ["Preset 1", "Preset 2", "Preset 3", "Preset 4"]
    }

    componentDidMount() {
    }

    choosePreset = (e) => {
        console.log(e.target.value)
    }

    render() {
        return (
            <div className="PresetBrowser">
                <input type="file" onChange={(e) => this.props.loadPreset(e)}/>
                <ul className="PresetDropdown">
                    <label> ^ </label>
                    {
                        this.state.presets.map((preset, i) =>
                            <li key={preset} onClick={(e) => this.choosePreset(e)}>{preset}</li>
                        )
                    }
                </ul>
            </div>
        );
    }
}

export default PresetBrowser;