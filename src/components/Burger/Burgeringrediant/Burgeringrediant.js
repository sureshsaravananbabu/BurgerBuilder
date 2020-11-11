import React ,{Component}from 'react';
import classes from './Burgeringrediant.css';
import propTypes from 'prop-types';

class BurgerIngrediant extends Component{
    render(){
            let ingrediant=null;
        switch(this.props.type){
            case('bread-bottom'):
            
                ingrediant=<div className={classes.bread_bottom} ></div>;
                break;
            case('bread-top'):
                ingrediant=(
                    <div className={classes.bread_top}>
                        <div className={classes.seeds}></div>
                        <div className={classes.seeds2}></div>
                    </div>
                );
                break;
            case('meat'):
                ingrediant=<div className={classes.meat} ></div>;
                break;
            case('cheese'):
                ingrediant=<div className={classes.cheese} ></div>;
                break; 
            case('bacon'):
                ingrediant=<div className={classes.bacon} ></div>;
                break;
            case('salad'):
                ingrediant=<div className={classes.salad} ></div>;
                break;
            default:
                ingrediant=null;
                
        }
        return ingrediant;

        }
}
BurgerIngrediant.propTypes={
    type:propTypes.string.isRequired
};
export default BurgerIngrediant;