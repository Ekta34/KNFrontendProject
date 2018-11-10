import React from 'react'
import './Toolbar.css'
import {FaBars} from "react-icons/fa"

class Toolbar extends React.Component{

  render(){
    return(
        <header className="toolbar">
            <nav className="toolbar_navigation">
              <div className="drawer_logo" onClick={this.props.toggleDrawer}>
                <FaBars color="white" size={20} style={{cursor:'pointer'}}/>
              </div>
              <div className="toolbar_logo">OYODO</div>
              <div className="spacer"/>
              <div className="toolbar_navigation_items">
                  <ul>
                      <li><a href="/">HOME</a></li>
                      <li><a href="/">DASHBOARD</a></li>
                      <li><a href="/">RESOURCE</a></li>
                      <li><a href="/">ARTCILES</a></li>
                      <li><a href="/">PROFILE</a></li>
                  </ul>
              </div>
            </nav>
        </header>
    )
  }
}

export default Toolbar
