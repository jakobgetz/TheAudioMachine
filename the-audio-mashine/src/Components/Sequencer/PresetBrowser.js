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

    render() {
        return (
            <div className="PresetBrowser">
                <ul className="PresetDropdown">
                    <label> ^ </label>
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
            </div>
        );
    }
}

export default PresetBrowser;