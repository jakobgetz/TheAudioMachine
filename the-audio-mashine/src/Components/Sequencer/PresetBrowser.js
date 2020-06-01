import React, {Component} from 'react';

class PresetBrowser extends Component {

    state = {
        presets: ["Preset 1", "Preset 2", "Preset 3", "Preset 4"]
    }

    /*
    componentDidMount() {
        fetch(__dirname)
            .then(response => console.log(response))
        console.log(__dirname + 'Presets')
        let fs = require('browserify-fs')
        fs.readdir(__dirname, (content, err) => {
            if (err) {
                console.log(err)
            } else {
                console.log(content)
            }
        })
    }
    */

    choosePreset = (e) => {
        console.log(e.target.value)
    }

    render() {
        return (
            <div className="PresetBrowser">
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