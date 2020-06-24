import React, {Component} from 'react';

class Header extends Component {
    render() {
        return (
            <div className="Header">
                <h1>The Audio Machine</h1>
                Version Info:<br/>
                - <b>Note: </b>
                - Custom Samples are not saved in custom Presets yet<br/>
                - Playhead always starts at the very top of the sequencer<br/>
            </div>
        );
    }
}

export default Header;