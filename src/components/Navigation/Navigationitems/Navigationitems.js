import React from 'react'
import classes from './Navigationitems.css'
import Navigationitem from './Navigationitem/Navigationitem.js'
const Navigationitems=(props)=>(
<ul className={classes.NavigationItems}>
    <Navigationitem link="/" >Burger Builder</Navigationitem> 
    {props.isAuthenticated ? <Navigationitem link ="/orders">Orders</Navigationitem> : null}
    {!props.isAuthenticated ? <Navigationitem link ="/auth">Login/Signup</Navigationitem> : <Navigationitem link ="/logout">Logout</Navigationitem>}

</ul>
)
export default Navigationitems