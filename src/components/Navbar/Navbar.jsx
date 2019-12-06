import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'
import { Breakpoint } from 'react-socks';

export default class Navbar extends Component {
    render() {
        return (
            <nav>
                <Breakpoint desktop only>
                <ul className="navbar" id="menuu">
                    <li><NavLink exact to="/menu" activeClassName="active">MENÙ</NavLink></li>
                    <li className="separator"><span className="circle"></span></li>
                    <li><NavLink exact to="/burgers" activeClassName="active">BURGERS</NavLink></li>
                    <li className="separator"><span className="circle"></span></li>
                    <li><NavLink exact to="/story" activeClassName="active">STORY</NavLink></li>
                    <li className="separator"><span className="circle"></span></li>
                    <li><NavLink exact to="/locations" activeClassName="active">LOCATIONS</NavLink></li>
                    <li className="separator"><span className="circle"></span></li>
                    <li><NavLink exact to="/creativity">CREATIVITY</NavLink></li>
                    <li className="separator"><span className="circle"></span></li>
                    <li><NavLink exact to="/contact" activeClassName="active">CONTACT</NavLink></li>
                    <li className="separator"><span className="circle"></span></li>
                    <li><NavLink exact to="/proponici" activeClassName="active">PROPONICI IL TUO IMMOBILE</NavLink></li>
                    <li className="separator"><span className="circle"></span></li>
                    <li><NavLink exact to="/lavora" activeClassName="active">LAVORA CON NOI</NavLink></li>
                </ul>
                </Breakpoint>
            </nav>
        )
    }
}
