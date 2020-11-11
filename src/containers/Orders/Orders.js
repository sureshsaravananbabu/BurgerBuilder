import React,{ Component } from 'react'
import ErrorHandler from '../../hoc/Error-hadler/Error-Handler'
import instance from '../../axios-orders';
import {connect } from 'react-redux';
import Reactaux from '../../hoc/reactaux.js';
import Order from '../../components/Checkout/order/order';
import * as actions from '../../store/actions/index'
import Spinner from '../../components/UI/Spinner/Spineer';
class Orders extends  Component {
    componentDidMount(){ 
        this.props.fetchorder(this.props.token,this.props.userid)
     
    }
    render() {
        let loader=this.props.loading?<p>Sorry orders cannot be loaded</p>:null
        loader=<Spinner/>
        if((this.props.order).length!==0){
            loader =<div> 
            {this.props.order.map(order=>(
                <Order key={order.id}
                    ingrediant={order.ingrediant}
                    price={order.price}/>    
            ))}
         </div>
        }
        return(
            <Reactaux>
                {loader}
            </Reactaux>
            
        )
    };
}

const mapStateToProps=state=>{
    return {
       order:state.order.orders,
       loading:state.order.fetchloading,
       token:state.auth.token,
       userid:state.auth.userid

    }
}


const mapDispatchToProps=dispatch=>{
    return{
        fetchorder:(token,userid)=>dispatch(actions.orderInit(token,userid)),
    }
}


export default connect (mapStateToProps,mapDispatchToProps)(ErrorHandler(Orders,instance));