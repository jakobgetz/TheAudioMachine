import React, {Component} from 'react';

class PresetBrowser extends Component {
    userTag = 'user';
    selectedPresetName;
    state = {
        presets: [
            [
                "house"
            ],
            [
                "techno"
            ],
            [
                "hipHop"
            ],
            [
                "dubstep"
            ],
            [
                "user"
            ],
            [
                "factory",
                "Init",
                "HouseBeat",
                "VelocityShowcase",
                "PitchShowcase"
            ]
        ]
    }

    /**
     * sets up the PresetBrowser
     */
    componentDidMount() {
        this.initPresets()
    }

    /**
     * initializes the preset Browser
     */
    initPresets = () => {
        if (localStorage.getItem('presets') === undefined) {
            localStorage.setItem('presets', JSON.stringify(this.state.presets))
        }
        this.setState({presets: JSON.parse(localStorage.getItem('presets'))})
    }

    /**
     * Saves a preset to /Presets/User
     */
    savePreset = () => {
        let name = prompt("Name your preset");
        let presets = this.state.presets;
        presets = presets.map(category => {
                if (category[0] === this.userTag) {
                    category.push(name);
                }
                return category;
            }
        )
        localStorage.setItem('presets', JSON.stringify(presets))
        localStorage.setItem(name, JSON.stringify(this.props.setting))
        this.setState({presets: presets});
    }

    /**
     *
     * @param presetName
     * @param categoryName
     */
    loadPreset = async (presetName, categoryName) => {
        let preset;
        if (categoryName === this.userTag) {
            preset = JSON.parse(localStorage.getItem(presetName));
        } else {
            const response = await fetch('Presets/' + presetName + '.json')
            preset = await response.json();
        }
        this.selectedPresetName = presetName
        this.props.setPreset(preset)
    }

    render() {
        return (
            this.state ?
                <div className="PresetBrowser">
                    <ul className="PresetDropdown">
                        <label>Preset: {this.selectedPresetName}</label>
                        {
                            this.state.presets.map(category =>
                                <li key={category[0]}>
                                    <ul>
                                        {category[0]} >
                                        {
                                            category.slice(1).map(preset =>
                                                <li key={preset}
                                                    onClick={() => this.loadPreset(preset, category[0])}>{preset}</li>
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
