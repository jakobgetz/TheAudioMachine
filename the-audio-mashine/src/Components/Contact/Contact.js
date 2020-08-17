import React, {Component} from 'react';
import Person from "../about/Person";

class Contact extends Component {
    render() {
        return (
            <div className="sequencer contact">
                <Person name={"Umut"} job={"UX Design"} pic={"../Assets/pascal_escher_portrait.jpg"}/>
                <Person name={"Steffen"} job={"UX Design/Mama für alles"} pic={"../Assets/pascal_escher_portrait.jpg"}/>
                <Person name={"Jakob"} job={"Harcore Programmer"} pic={"../Assets/pascal_escher_portrait.jpg"}/>
                <Person name={"Joris"} job={"Programmer with heart"} pic={"../Assets/pascal_escher_portrait.jpg"}/>
                <Person name={"Benedikt"} job={"Hot Techno Shit"} pic={"../Assets/pascal_escher_portrait.jpg"}/>
                <Person name={"Pascal"} job={"Old but gold"} pic={"../Assets/pascal_escher_portrait.jpg"}/>
            </div>
        );
    }
}

export default Contact;
