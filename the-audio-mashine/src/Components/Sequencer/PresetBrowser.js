import React, {Component} from 'react';
//import presets from "../../Presets/presets";

class PresetBrowser extends Component {

    /**
     * sets up the PresetBrowser
     */
    componentDidMount() {
        fetch('Presets/presets.json')
            .then(response => response.json())
            .then(presets => this.setState(presets))
    }

    /**
     * sets the state to an object which contains all Presets
     * @returns {Promise<void>}
     */
    getPresets = async () => {
        const response = await fetch('Presets/presets.json')
        const presets = await response.json();
        this.setState(presets)
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
        /*
        let name = prompt("Name your preset")
        presets[4].push(name)
        this.setState({presets: presets})
        let json = JSON.stringify(this.props.setting);
         */
    }

    render() {
        return (
            this.state ?
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
                : null
        );
    }
}

export default PresetBrowser;
