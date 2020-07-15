import React, {Component} from 'react';

class HeaderButtons extends Component {
    isrecording = false;
    recording(){
        if(this.isrecording){
            this.props.recordEnd();
            this.isrecording = false;
        } else {
            this.props.recordStart();
            this.isrecording = true;
        }
    }

    menu() {
    }
    render() {
        return (
                <div className="header-buttons">

                    <div className="header-button burger">
                        <i className="fas left fa-bars" onClick={(e) => this.menu()}></i>
                    </div>
                    {/*
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
                    <div className="header-button night-mode" id={"rec"}>
                        <i className="fas left fa-moon" onClick={(e) => this.recording()}></i>
                    </div>
            </div>
        );
    }
}

export default HeaderButtons;