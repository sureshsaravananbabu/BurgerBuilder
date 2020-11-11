import React from 'react'
import classes from './Toolbar.css'
import Logo from '../../Logo/Logo.js'
import Navigationitems from '../Navigationitems/Navigationitems.js'
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle'
const Toolbar=(props)=>{
return(
    <header className={classes.Toolbar}>
        <DrawerToggle clicked={props.drawerToggleclicked}/>
        <div className={classes.Logo}>
        <Logo/>
        </div>
        <nav className={classes.DesktopOnly}>
        <Navigationitems isAuthenticated={props.isAuth}/>
        </nav>
    </header> 
)
}
export default Toolbar;