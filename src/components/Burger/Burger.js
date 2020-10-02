import React from 'react';
import classes from './Burger.css';
import BurgerIngrediant from './Burgeringrediant/Burgeringrediant.js'
const Burger= (props)=>{
  return(
      <div className={classes.Burger}>
      <BurgerIngrediant type="bread-bottom"/>
      {/* <BurgerIngrediant type="cheese"/>
      <BurgerIngrediant type="meat"/>
      <BurgerIngrediant type="bread-Bottom"/> */}
      </div>

  );   
};
export default Burger;