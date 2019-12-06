import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import './Logo.css'

export default class LogoMain extends Component {
    render() {
        return (
            <div className="logoMain">
                <NavLink exact to="/"><img src={require("../../assets/trynot_grey2.png")} alt=""/></NavLink>
            </div>
        )
    }
}
