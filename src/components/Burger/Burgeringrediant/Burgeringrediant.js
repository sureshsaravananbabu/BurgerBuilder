import React ,{Component}from 'react';
import classes from './Burgeringrediant.css';
import propTypes from 'prop-types';

class BurgerIngrediant extends Component{
    render(){
        let ingrediant=null;
    switch(this.props.type){
        case('bread-bottom'):
            ingrediant=<h1 className={classes.fuck}>ghgcghc</h1>;
            break;
        // case('bread-top'):
        //     ingrediant=(
        //         <div className={classes.bread_top}>
        //             <div className={classes.seeds}></div>
        //             <div className={classes.seeds}></div>
        //         </div>
        //     );
        //     break;
        // case('meat'):
        //     ingrediant=<div className={classes.Meat} ></div>;
        //     break;
        // case('cheese'):
        //     ingrediant=<div className={classes.Cheese} ></div>;
        //     break; 
        // case('bacon'):
        //     ingrediant=<div className={classes.Bacon} ></div>;
        //     break;
        // case('salad'):
        //     ingrediant=<div className={classes.Salad} ></div>;
        //     break;
        default:
            ingrediant=null;
               
    }
    return ingrediant;

    }
}
BurgerIngrediant.propTypes={
    type:propTypes.string.isRequired
};
console.log(BurgerIngrediant.propTypes)
export default BurgerIngrediant;