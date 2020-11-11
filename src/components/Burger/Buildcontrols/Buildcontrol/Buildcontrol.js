import React from 'react';
import classes from './Buildcontrol.css'
const BuildContol=(props)=>(
<div className={classes.BuildControl}>
    <div className={classes.Label}>
        {props.label}</div>
        <button className={classes.Less} onClick={props.delete } disabled={props.disabled} >LESS</button>
        <button className={classes.More} onClick={props.added   }>MORE</button>
</div>
);
export default BuildContol