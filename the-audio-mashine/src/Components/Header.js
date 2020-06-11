import React, {Component} from 'react';

class Header extends Component {
    render() {
        return (
            <div className="Header">
                <h1>The Audio Machine</h1>
                Version Info:<br/>
                    - Saving Presets not working yet<br/>
                    - Preset + / - not working yet<br/>
                    - Press the grey Button in the middle of the sequencer to start<br/>
                    - Playhead always starts at the very top of the sequencer<br/>
            </div>
        );
    }
}

export default Header;