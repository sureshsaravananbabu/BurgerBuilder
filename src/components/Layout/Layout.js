import React from 'react';
import Reactaux from '../../hoc/reactaux.js';
import classes from './Layout.css'; 
const Layout =(props)=>(
    <Reactaux>
    <div>Toolbar,sidebar,Backdrop</div>
    <main className={classes.Content }>{props.children}</main>
    </Reactaux>
)

export default Layout;