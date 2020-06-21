import React, {Component} from 'react';
import About from "./About/About";
import Contact from "./Contact/Contact";
// More info: https://github.com/negomi/react-burger-menu
import {slide as Menu} from 'react-burger-menu';
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import Sequencer from "./Sequencer/Sequencer";

import '../CSS/burgerMenu.scss'

class BurgerMenu extends Component {
    menuOpen = false;
    closeMenu = () => {
        this.setState({menuOpen: false})
    }

    render() {
        return (
            <Router>
                <div>
                    <div>
                        <Menu>
                            <nav>
                                <ul>
                                    <div>
                                        <Link to="/" className="link-item"
                                              onClick={() => this.closeMenu()}>The Audio Machine</Link>
                                    </div>
                                    <div>
                                        <Link to="/about" className="link-item"
                                              onClick={() => this.closeMenu()}>About</Link>
                                    </div>
                                    <div>
                                        <Link to="/contact" className="link-item"
                                              onClick={() => this.closeMenu()}>Contact</Link>
                                    </div>
                                </ul>
                            </nav>
                        </Menu>
                        <Switch>
                            <Route path="/about">
                                <About/>
                            </Route>
                            <Route path="/contact">
                                <Contact/>
                            </Route>
                            <Route path="/">
                                <Sequencer/>
                            </Route>
                        </Switch>
                    </div>
                </div>
            </Router>
        );
    }
}

export default BurgerMenu;
