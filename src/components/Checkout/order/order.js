import React from 'react';
import classes from './order.css'
const Order=(props)=>{
const Ingrediants=[];
for (let Ingrediantsname in props.ingrediant){
    Ingrediants.push(
        {   name:Ingrediantsname, 
            amount:props.ingrediant[Ingrediantsname]
        }
    );
}
const ingrediantOutput =Ingrediants.map((Key,ig)=>{
    return <span style={{textTransform:'capitalize',display:'inline-block',margin:'0 8px',border:'1px solid #ccc', padding:'5px'}} key={ig}>{Key.name}-{Key.amount}</span>
}

);
    return(
    <div className={classes.Order}>
        <p>
           {ingrediantOutput}
        </p>
        <p>
        Price:<strong>{props.price}</strong>
        </p>
    </div>
    )
}

export default Order;