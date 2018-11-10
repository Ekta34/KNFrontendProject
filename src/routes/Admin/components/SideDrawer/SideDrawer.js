import React from 'react'
import './SideDrawer.css'

const SideDrawer = props => {
    
    let drawerClasses = 'side-drawer';

    if(props.show){
        drawerClasses = 'side-drawer open';
    }

    return (
        <nav className={drawerClasses}>
            <ul>
                <li><a href="/">HOME</a></li>
                <li><a href="/">DASHBOARD</a></li>
                <li><a href="/">RESOURCE</a></li>
                <li><a href="/">ARTCILES</a></li>
                <li><a href="/">PROFILE</a></li>
            </ul>
        </nav>
    )
}

export default SideDrawer