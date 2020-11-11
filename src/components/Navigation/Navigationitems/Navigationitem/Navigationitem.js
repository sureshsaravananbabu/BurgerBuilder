import React from 'react';
import classes from './Navigationitem.css'
import {NavLink} from 'react-router-dom'; 
const Navigationitem =(props)=>{
return(
<li className={classes.NavigationItem}>
<NavLink to={props.link} exact activeClassName={classes.active}>{props.children}</NavLink> 
</li>
 );
}
export default Navigationitem;