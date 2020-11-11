import React from 'react';
import Burger from '../../Burger/Burger'
import Button from '../../UI/Button/Button'
import classes from './CheckoutSummary.css'
const CheckoutSummary=(props)=>{
    return(
        <div className={classes.CheckoutSummary}>
            <h1>We hope it taste well!!</h1>
            <div style={{width:'100%',margin:'auto'}}>
            <Burger ingrediant={props.ingrediants}/>
            </div>
            <Button btnType="Danger" clicked={props.checkoutcancelled}>CANCEL</Button>
            <Button btnType="Success"clicked={props.checkoutcontinue}>CONTINUE  </Button>
        </div>
    );
} 

export default CheckoutSummary;