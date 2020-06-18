import React, {Component} from 'react';

class BurgerMenu extends Component {
    render() {
        return (
            <div>
                <div>
                    BurgerMenu
                </div>
                <ul>
                    <li><a href={'/about'}>About</a></li>
                    <li><a href={'/'}>The Audio Mashine</a></li>
                    <li><a href={'/contact'}>Contact</a></li>
                </ul>
            </div>
        );
    }
}

export default BurgerMenu;