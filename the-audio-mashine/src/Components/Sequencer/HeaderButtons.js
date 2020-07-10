import React, {Component} from 'react';

class HeaderButtons extends Component {
    render() {
        return (
                <div className="header-buttons">
                    <div className="header-button burger">
                        <i className="fas left fa-bars"></i>
                    </div>

                    <div className="header-button share">
                        <i className="fas left fa-share-alt"></i>
                    </div>

                    <div className="header-button save">
                        <i className="fas left fa-save"></i>
                    </div>

                    <div className="header-button export">
                        <i className="fas left fa-download"></i>
                    </div>

                    <div className="header-button night-mode">
                        <i className="fas left fa-moon"></i>
                    </div>
            </div>
        );
    }
}

export default HeaderButtons;