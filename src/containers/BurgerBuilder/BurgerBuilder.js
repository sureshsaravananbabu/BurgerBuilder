import React ,{Component} from 'react';
import Reactaux from '../../hoc/reactaux.js';
import Burger from '../../components/Burger/Burger.js';
class BurgerBuilder extends Component{
    render() {
        return(
            <Reactaux>
                <Burger/>
                <div>Build Controls</div>
            </Reactaux>
        );
    }
     
};

export default BurgerBuilder;