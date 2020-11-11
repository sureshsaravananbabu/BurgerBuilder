import React from 'react';
import Reactaux from '../../../hoc/reactaux'
import Button from '../../UI/Button/Button.js'
const Ordersummary=(props)=>{
    const ingrediantsummary=Object.keys(props.ingrediant)
        .map(igkey=>{
            return<li key={igkey}><span style={{textTransform:'capitalize'}}>{igkey}</span>:{props.ingrediant[igkey]}</li>
        }
            );
    return (    
        <Reactaux>
            <h3>Your order</h3>
            <p>A delicious  burger with following ingrediant: </p>
            <ul>
                 {ingrediantsummary}
            </ul>
            <b>Total price:{props.price}</b>
            <p>Continue to Checkout</p>
            <Button btnType="Danger" clicked={props.cancel}>CANCEL</Button>
            <Button btnType="Success" clicked={props.continue}>CONTINUE</Button>
        </Reactaux>
    )

}

export default Ordersummary