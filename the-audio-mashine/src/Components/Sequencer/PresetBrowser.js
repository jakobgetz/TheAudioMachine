import React, {Component} from 'react';
import {GlobalHotKeys} from "react-hotkeys";

class PresetBrowser extends Component {
    userTag = 'user';
    selectedPresetName;
    state = {
        presets: [
            [
                "factory",
                "Init",
                "Downtempo (70 BpM)",
                "Urban (95 BpM)",
                "808 Pattern (115 BpM)",
                "Drum n' Bass (170 BpM)",
                "Trap 01 (140 BpM)",
                "Trap02 (105 Bpm)",
                "Techno 01 (128 BpM)",
                "Techno 02 (128 BpM)",
                "House (123 BpM)",
                "Dubstep 01 (140 BpM)",
                "Dubstep 02 (141 BpM)"
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
                "Trap"
            ],
            [
                "user"
            ]
        ]
    }

    keyMap = {
        NEXT_PRESET: "+",
        PREV_PRESET: '-'
    };

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

    /**
     *
     * @type {{NEXT_PRESET: (function(): void), PREV_PRESET: (function(): void)}}
     */
    handleKeyboardInput = {
        NEXT_PRESET: () => this.loadNextPreset(),
        PREV_PRESET: () => this.loadPrevPreset()
    };

    render() {
        return (
            this.state ?
                <GlobalHotKeys keyMap={this.keyMap} handlers={this.handleKeyboardInput}>

                    <div className="search-box">
                        {this.selectedPresetName}
                        <div className="search-button">
                            <i className="fas fa-chevron-down"></i>
                        </div>
                    </div>

                    <div className="preset-browser__buttons">
                        <div className="preset-button" onClick={() => this.savePreset()}>
                            <i className="fas left fa-save"></i>
                        </div>

                        <div className="preset-button" onClick={this.loadPrevPreset}>
                            <i className="fas fa-chevron-right"></i>
                        </div>

                        <div className="preset-button" onClick={this.loadNextPreset}>
                            <i className="fas fa-chevron-left"></i>
                        </div>

                        <div className="preset-button" onClick={this.props.resetTriggers}>
                            <i className={"fas fa-trash-alt"}></i>
                        </div>
                    </div>

                    {/*<div className="PresetBrowser">
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
                    </div>*/}
                </GlobalHotKeys>
                : null
        );
    }
}

export default PresetBrowser;
