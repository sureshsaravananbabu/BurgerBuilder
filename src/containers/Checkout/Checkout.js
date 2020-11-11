import React,{Component} from 'react';
import {Route,Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import CheckoutSummary from '../../components/Checkout/CheckoutSummary/CheckoutSummary'
import Contactdata from './Contactdata/Contactdata';
class Checkout extends Component{
    
    checkoutcancelledhandler=()=>{
        this.props.history.goBack();
    }
    checkoutcontinuehandler=()=>{
        this.props.history.replace('checkout/contact-data');
    }
    
    render(){
        let  summary=<Redirect to="/" />
        if (this.props.ings)
        {
            const purchaseredirect=this.props.purchased ? <Redirect to="/" /> :null;
            summary=(
                <div>
                {purchaseredirect }
                <CheckoutSummary ingrediants={this.props.ings}
                 checkoutcancelled={this.checkoutcancelledhandler} 
                 checkoutcontinue={this.checkoutcontinuehandler}/>
                <Route path={this.props.match.path + '/contact-data'} 
                    component={Contactdata}/>
                    </div>

            )
            
        }
        return  summary;
    }

}

const mapStateToProps=state=>{
    return {
        ings:state.bugerBuilder.ingrediant,
        purchased:state.order.purchase
    };
}


export default connect(mapStateToProps)(Checkout);