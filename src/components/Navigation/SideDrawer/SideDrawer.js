import React from 'react'
import Logo from '../../Logo/Logo.js'
import NavigationItems from '../Navigationitems/Navigationitems';
import classes from './SideDrawer.css'
import Backdrop from  '../../UI/Backdrop/Backdrop'
import Reactaux from '../../../hoc/reactaux'
const SideDrawer=(props)=>{

    let attachedClasses=[classes.SideDrawer,classes.Close];
    if (props.open)
    {
        attachedClasses=[classes.SideDrawer,classes.open];
    } 
    return(
        <Reactaux>
         <Backdrop show ={props.open} clicked={props.closed} />   
        <div className={attachedClasses.join(' ')} onClick={props.closed}>
            <div className={classes.Logo}>
            <Logo/>
            </div>
            <nav>
                <NavigationItems isAuthenticated={props.isAuth} /> 
            </nav>
        </div>
        </Reactaux>
    )
}
export default SideDrawer