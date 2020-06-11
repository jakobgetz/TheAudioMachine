import React, {Component} from 'react';
import presets from "../../Presets/presets";

class PresetBrowser extends Component {

    state = {
        presets: presets
    }

    /**
     * chooses a preset
     * @param preset
     */
    choosePreset = (preset) => {
        this.props.loadPreset(preset)
    }

    /**
     * Saves a preset to /Presets/User
     * @param e event in which the current Preset is contained
     */
    savePreset = () => {
        let name = prompt("Name your preset")
        presets[4].push(name)
        this.setState({presets: presets})
        let json = JSON.stringify(this.props.setting);
        /*
        let fs = require('browserify-fs');
        fs.writeFile(presets[4][presets[4].length - 1] + ".json", json)
         */

    }

    render() {
        return (
            <div className="PresetBrowser">
                <ul className="PresetDropdown">
                    <label>Presets</label>

                    {
                        this.state.presets.map(genre =>
                            <li key={genre[0]}>
                                <ul>
                                    {genre[0]} >
                                    {
                                        genre.slice(1).map(preset =>
                                            <li key={preset}
                                                onClick={() => this.choosePreset(preset)}>{preset.slice(0, -5)}</li>
                                        )
                                    }
                                </ul>
                            </li>
                        )
                    }
                </ul>
                <button>-</button>
                <button>+</button>
                <button onClick={() => this.savePreset()}>Save</button>
            </div>
        );
    }
}

export default PresetBrowser;
