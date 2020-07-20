import React, {Component} from 'react';

class HeaderButtons extends Component {

    isRecording = false;

    recording() {
        if (this.isrecording) {
            this.props.recordEnd();
            this.isRecording = false;
        } else {
            this.props.recordStart();
            this.isRecording = true;
        }
    }

    clearLocalStorage() {
        localStorage.removeItem("presets");
    }

    render() {
        return (
            <div className="header-buttons">
                {/*
                <div className="header-button burger">
                    <i className="fas left fa-bars" onClick={(e) => this.clearLocalStorage()}></i>
                </div>

                    <div className="header-button share">
                        <i className="fas left fa-share-alt"></i>
                    </div>

                    <div className="header-button save">
                        <i className="fas left fa-save"></i>
                    </div>
*/}
                <div className="header-button export">
                    <i className="fas left fa-download" onClick={(e) => this.props.export()}></i>
                </div>
                <div className="header-button" id={"rec"}>
                    <i className="fas left fa-circle rec "onClick={(e) => this.recording()}></i>
                </div>
            </div>
        );
    }
}

export default HeaderButtons;