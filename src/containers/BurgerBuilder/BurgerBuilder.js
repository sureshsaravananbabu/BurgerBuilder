import React ,{Component} from 'react';
import Reactaux from '../../hoc/reactaux.js';
import Burger from '../../components/Burger/Burger.js';
import Buildcontrols from '../../components/Burger/Buildcontrols/Buildcontrols.js'
import Modal from '../../components/UI/Modal/Modal'
import Ordersummary from '../../components/Burger/ordersummary/ordersummary'
import instance from '../../axios-orders';
import Spinner from '../../components/UI/Spinner/Spineer';
import ErrorHandler from '../../hoc/Error-hadler/Error-Handler'
import {connect } from 'react-redux';
import * as actions  from '../../store/actions/index' 

class BurgerBuilder extends Component{ 
    state={
        purchasing:false
        
    }

    componentDidMount(){
        if(!this.props.building || this.props.purchase){
        this.props.onInitIngrediant()
    }
    }
    updatepurchaseState(){
        const ingrediant ={
            ...this.props.ings
        }
        const sum=Object.keys(ingrediant).map(igkey=>{
            return ingrediant[igkey];
        }).reduce((sum,el)=>{return sum+el;});
        return sum >0
    }
    purchaseHandler=()=>{
        if(this.props.isAuthenticated){
            this.setState({purchasing:true});
        }
        else{
            this.props.onsetauthredirectpath('/checkout');
            this.props.history.push('/auth')
        }
        
    }
    closedHandler=()=>
    {
        this.setState({purchasing:false});
    }


    purchasecontinueHandler=()=>{
        // this.props.onIngrediantPurchase();
        this.props.history.push('/checkout');
    }
    purchasecancelHandler=()=>{
        this.setState({purchasing:false});
    }
    render() {
        const disableInfo={
            ...this.props.ings 
        };
        for (let key in disableInfo){
            disableInfo[key]=disableInfo[key]<=0
        }

        let ordersummary=null; 
        let burger=this.props.error?<p>Ingrediant  can't be loaded </p>:null
        burger=<Spinner/>
        if (this.props.ings){
            burger=(
                <Reactaux>
                 <Burger ingrediant={this.props.ings} />
                <Buildcontrols isAuth={this.props.isAuthenticated}
                ingrediantadded={this.props.onIngrediantAdded} ingrediantdelete={this.props.onIngrediantRemoved} price={this.props.price}  disabled={disableInfo}
                purchasable={this.updatepurchaseState()} ordered={this.purchaseHandler }/>
                </Reactaux>
            )
            ordersummary=<Ordersummary price={this.props.price} ingrediant={this.props.ings} cancel={this.purchasecancelHandler} continue={this.purchasecontinueHandler}/>
        }
        return(
            <Reactaux>
                <Modal show ={this.state.purchasing} back={this.closedHandler}>
                    {ordersummary}
                     </Modal>
                    {burger}
            </Reactaux>
        );
    }
     
};

const mapStateToProps=state=>{
    return {
        ings:state.bugerBuilder.ingrediant,
        price:state.bugerBuilder.totalprice,
        error:state.bugerBuilder.error,
        isAuthenticated:state.auth.token!==null,
        building:state.bugerBuilder.Building,
        purchase:state.order.purchase
    };
}
const mapDispatchToProps=dispatch=>{
    return{
        onIngrediantAdded:(ingName)=>dispatch(actions.addIngrediant(ingName)),
        onIngrediantRemoved:(ingName)=>dispatch(actions.removeIngrediant(ingName)),
        onInitIngrediant:()=>dispatch(actions.initIngrediant()),
        // onIngrediantPurchase:()=>dispatch(actions.purchaseInit())
        onsetauthredirectpath: (path) =>dispatch(actions.setAuthRedirectPath(path))
    } 
}

export default connect(mapStateToProps,mapDispatchToProps)(ErrorHandler(BurgerBuilder,instance));