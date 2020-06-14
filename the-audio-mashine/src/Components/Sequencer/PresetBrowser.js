import React, {Component} from 'react';

class PresetBrowser extends Component {
    static userTag = 'user';
    presetName = 'CustomPresets.json';

    /**
     * sets up the PresetBrowser
     */
    componentDidMount() {
        this.initPresets().catch();
    }

    initPresets = async () => {
        const response = await fetch('Presets/presets.json');
        const preset = await response.json();
        await this.setState(preset);
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
     * @param categoryName
     */
    choosePreset = (preset, categoryName) => {
        this.loadPreset(preset, categoryName);
    }

    /**
     * Saves a preset to /Presets/User
     */
    savePreset = () => {
        let name = prompt("Name your preset");
        let presets = this.state.presets;
        presets = presets.map(category => {
                if (category[0] === PresetBrowser.userTag) {
                    category.push(name);
                }
                return category;
            }
        )
        this.setState({presets: presets}, () => this.savePresetToLocalStorage(this.props.setting));
    }

    /**
     * Saves a json file to local storage
     * @param data
     */
    savePresetToLocalStorage = (data) => {
        let stringData = JSON.stringify(data)
        const fs = require('localstorage-fs');
        fs.writeFile(this.presetName, stringData, (err) => {
            if (err) return console.log(err);
            console.log('Preset saved to local storage');
        });
    }

    /**
     *
     * @param presetName
     * @param categoryName
     */
    loadPreset = async (presetName, categoryName) => {
        let preset;
        if (categoryName === PresetBrowser.userTag) {
            preset = await this.loadPresetFromLocalStorage(presetName);
        } else {
            const response = await fetch('Presets/' + presetName)
            preset = await response.json();
        }
        this.props.setPreset(preset)
    }

    /**
     *
     */
    loadPresetFromLocalStorage = async () => {
        const fs = require('localstorage-fs');
        let result = await fs.readFile(this.presetName, err => {
            if (err) return console.log(err);
            console.log('Error while reading preset from localstorage');
        });
        return await result.json();
    }

    render() {
        return (
            this.state ?
                <div className="PresetBrowser">
                    <ul className="PresetDropdown">
                        <label>Presets</label>
                        {
                            this.state.presets.map(category =>
                                <li key={category[0]}>
                                    <ul>
                                        {category[0]} >
                                        {
                                            category.slice(1).map(preset =>
                                                <li key={preset}
                                                    onClick={() => this.choosePreset(preset, category[0])}>{preset.slice(0, -5)}</li>
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
