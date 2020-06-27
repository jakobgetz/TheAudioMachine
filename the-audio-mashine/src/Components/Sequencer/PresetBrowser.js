import React, {Component} from 'react';

class PresetBrowser extends Component {
    userTag = 'user';
    selectedPresetName;
    state = {
        presets: [
            [
                "factory",
                "Init",
                "HouseBeat",
                "Trap01",
                "VelocityShowcase",
                "PitchShowcase"
            ],
            [
                "Acoustic"
            ],
            [
                "Classic 808"
            ],
            [
                "Drum n Bass"
            ],
            [
                "Dubstep"
            ],
            [
                "Techno"
            ],
            [
                "Trap02"
            ],
            [
                "user"
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
        if (localStorage.getItem('presets') === null) {
            localStorage.setItem('presets', JSON.stringify(this.state.presets))
        }
        this.setState({presets: JSON.parse(localStorage.getItem('presets'))})
        this.loadPreset('Init', 'factory')
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
     * loads previous Preset
     */
    loadPrevPreset = () => {
        const presets = this.state.presets
        let prevPresetName
        let prevPresetCategory

        OUTER_LOOP:
        for (let i = 0; i < presets.length; i++) {
            for (let j = 0; j < presets[i].length; j++) {
                if (presets[i][j] === this.selectedPresetName) {
                    j--
                    if (j > 0) {
                        prevPresetName = presets[i][j]
                        prevPresetCategory = presets[i][0]
                        break OUTER_LOOP
                    } else {
                        let counter = presets.length
                        while (counter > 0) {
                            i--
                            if (i < 0) {
                                i = presets.length - 1
                            }
                            j = presets[i].length - 1
                            if (j > 0) {
                                prevPresetName = presets[i][j]
                                prevPresetCategory = presets[i][0]
                                break OUTER_LOOP
                            }
                            counter--
                        }
                        prevPresetName = this.selectedPresetName
                        prevPresetCategory = presets[i][0]
                        break OUTER_LOOP
                    }
                }
            }
        }

        this.loadPreset(prevPresetName, prevPresetCategory)
    }

    /**
     * loads next Preset
     */
    loadNextPreset = () => {
        const presets = this.state.presets
        let nextPresetName
        let nextPresetCategory

        OUTER_LOOP:
            for (let i = 0; i < presets.length; i++) {
                for (let j = 0; j < presets[i].length; j++) {
                    if (presets[i][j] === this.selectedPresetName) {
                        j++
                        if (j < presets[i].length) {
                            nextPresetName = presets[i][j]
                            nextPresetCategory = presets[i][0]
                            break OUTER_LOOP
                        } else {
                            let counter = 0
                            while (counter < presets.length) {
                                i++
                                if (i >= presets.length) {
                                    i = 0
                                }
                                j = 1
                                if (j < presets[i].length) {
                                    nextPresetName = presets[i][j]
                                    nextPresetCategory = presets[i][0]
                                    break OUTER_LOOP
                                }
                                counter++
                            }
                            nextPresetName = this.selectedPresetName
                            nextPresetCategory = presets[i][0]
                            break OUTER_LOOP
                        }
                    }
                }
            }

        this.loadPreset(nextPresetName, nextPresetCategory)
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
                    <button onClick={this.loadPrevPreset}>-</button>
                    <button onClick={this.loadNextPreset}>+</button>
                    <button onClick={() => this.savePreset()}>Save</button>
                </div>
                : null
        );
    }
}

export default PresetBrowser;
