import React from 'react';
import classes from './Burger.css';
import BurgerIngrediant from './Burgeringrediant/Burgeringrediant.js'
const Burger= (props)=>{
  let transformedIngrediant=(props)=Object.keys(props.ingrediant).map(igkey=>{return [...Array(props.ingrediant[igkey])].map((_,i) =>{
    return <BurgerIngrediant key={igkey+i} type={igkey}/>;
  });
  })
  .reduce((arr,el)=> {return arr.concat(el)})
  if (transformedIngrediant.length===0)
  {
    transformedIngrediant=<p>please start adding ingrediant</p>
  }
  return(
      <div className={classes.Burger}>
      <BurgerIngrediant type="bread-top"/>
      {transformedIngrediant}
      <BurgerIngrediant type="bread-bottom"/>
      </div>

  );   
};
export default Burger;