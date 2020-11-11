import React from 'react';
import classes from './Buildcontrols.css';
import Buildcontrol from './Buildcontrol/Buildcontrol.js'
    const controls=[
        {label:'Salad',type:'salad'},
        {label:'Bacon',type:'bacon'},
        {label:'Cheese',type:'cheese'},
        {label:'Meat',type:'meat'},
    ]
const Buildcontrols=(props)=>(
    <div className={classes.Buildcontrol}>
        <p>Current price :{props.price}</p>
        {controls.map(ctrl=>(
            <Buildcontrol key={ctrl.label} label={ctrl.label} delete={()=>props.ingrediantdelete(ctrl.type)} added={()=>props.ingrediantadded(ctrl.type)} disabled={props.disabled[ctrl.type]}/>
        ))}
        <button className={classes.OrderButton} disabled={!props.purchasable} onClick={props.ordered}>{props.isAuth ? 'OrderNow' :'SIGN IN TO ORDER '}</button>
    </div>
);
export default Buildcontrols;