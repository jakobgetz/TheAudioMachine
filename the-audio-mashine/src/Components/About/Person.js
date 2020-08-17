import React, {Component} from 'react';

class Person extends Component {

    render() {
        return (
            <div className="person">
                <img src={this.props.pic} alt={"Portrait-Bild"}/>
                <div><label>{this.props.name}</label></div>
                <div><label>{this.props.job}</label></div>
            </div>
        );
    }
}

export default Person;
