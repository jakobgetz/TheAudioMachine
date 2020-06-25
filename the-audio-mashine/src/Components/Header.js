import React, {Component} from 'react';

class Header extends Component {



    render() {
        return (
            <div className="Header">
                <h1>The Audio Machine</h1>
                Version Info:<br/>
                - <b>Note: </b> In <i>componentDidMount()</i> of PresetBrowser the Preset 'Init' from the Category
                'factory' gets loaded. this is hard coded at the moment<br/>
                - Custom Samples are not saved in custom Presets yet<br/>
                - Playhead always starts at the very top of the sequencer<br/>
                - Added Velocity functionality, triggers are temporary replaced through range inputs
            </div>
        );
    }
}

export default Header;