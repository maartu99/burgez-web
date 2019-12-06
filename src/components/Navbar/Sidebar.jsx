import React, { Component } from 'react'
import { slide as Menu } from 'react-burger-menu';
import { NavLink } from 'react-router-dom'
import './reactmenu.css'
import { Breakpoint } from 'react-socks';

export default class Sidebar extends Component {
    constructor (props) {
        super(props)
        this.state = {
          menuOpen: false
        }
      }
    
    
    // This keeps state in sync with the opening/closing of the menu
  // via the default means, e.g. clicking the X, pressing the ESC key etc.
  handleStateChange (state) {
    this.setState({menuOpen: state.isOpen})  
  }
  
 isMenuOpen (state) {
    return state.isOpen;
  };

  // This can be used to close the menu, e.g. when a user clicks a menu item
  closeMenu () {
    this.setState({menuOpen: false})
  }

    render() {
        return (
            <Breakpoint tablet down>
            <Menu {...this.props}
            isOpen={this.state.menuOpen}
            onStateChange={(state) => this.handleStateChange(state)}
            right>
                <NavLink exact to="/menu" className="menu-item" onClick={() => this.closeMenu()} >MENÙ</NavLink>
                <NavLink exact to="/story" className="menu-item" onClick={() => this.closeMenu()} >STORY</NavLink>
                <NavLink exact to="/locations" className="menu-item" onClick={() => this.closeMenu()} >LOCATIONS</NavLink>
                <NavLink exact to="/creativity" className="menu-item" onClick={() => this.closeMenu()} >CREATIVITY</NavLink>
                <NavLink exact to="/contact" className="menu-item" onClick={() => this.closeMenu()} >CONTACT</NavLink>
                <NavLink exact to="/proponici" className="menu-item" onClick={() => this.closeMenu()} >PROPONICI IL TUO IMMOBILE</NavLink>
                <NavLink exact to="/lavora" className="menu-item" onClick={() => this.closeMenu()} >LAVORA CON NOI</NavLink>
            </Menu>
            </Breakpoint>
        )
    }
}
