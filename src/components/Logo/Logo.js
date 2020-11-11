import React from 'react'
import burgerLogo from '../../assest/images/burger-logo.png';
import classes from './Logo.css'
const Logo=(props)=>(
<div className={classes.Logo}>
    <img src={burgerLogo} alt="MyBurger"/>
</div>

);

export default Logo  