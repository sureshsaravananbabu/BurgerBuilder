import React,{Component } from 'react';
import Button from '../../../components/UI/Button/Button';
import classes from './Contactdata.css'
import Spinner from '../../../components/UI/Spinner/Spineer';  
import {connect} from 'react-redux';
import Input from '../../../components/UI/Input/Input.js'
import withErrorHandler from '../../../hoc/Error-hadler/Error-Handler'
import instance from '../../../axios-orders';
import * as actions from '../../../store/actions/index';
class ContatData extends Component{
    state={
        formvalid:false,
        orderForm:{
                name:{
                    elementType:'input',
                    elementconfig:{
                        type:'text',
                        placeholder:'Your Name '
                    },
                    value:'',
                    validation:{
                        required:true
                    },
                    valid:false,
                    touched:false
                },
                street:{
                    elementType:'input',
                    elementconfig:{
                        type:'text',
                        placeholder:'Street'
                    },
                    value:'',
                    validation:{
                        required:true
                    },
                    valid:false,
                    touched:false
                },
                zipcode:{
                    elementType:'input',
                    elementconfig:{
                        type:'text',
                        placeholder:'Zip code '
                    },
                    value:'',
                    validation:{
                        required:true,
                        maxLength:6
                    },
                    valid:false,
                    touched:false
                },
                country:{
                    elementType:'input',
                    elementconfig:{
                        type:'text',
                        placeholder:'Country '
                    },
                    value:'',
                    validation:{
                        required:true
                    },
                    valid:false,
                    touched:false
                },
                email:{
                    elementType:'input',
                    elementconfig:{
                        type:'email',
                        placeholder:'Your Email '
                    },
                    value:'',
                    validation:{
                        required:true
                    },
                    valid:false,
                    touched:false
                },
                deliveryMethod:{
                    elementType:'select',
                    elementconfig:{
                        options:[{value:'',displayValue:'Select Your Delivery Option'},{value:'fastest',displayValue:'Fastest'},{value:'cheapest',displayValue:'Cheapest'}]
                    },
                    value:'',
                    valid:false,    
                }
                 
            },
         }

    orderHandler=(event)=>{
        event.preventDefault()
        const formData={}
        for(let formElementidentifier in this.state.orderForm){
              formData[formElementidentifier]=this.state.orderForm[formElementidentifier].value; 
        }
        const order={
            ingrediant:this.props.ings,
            price:this.props.price,
            orderData:formData,
            userId:this.props.userid
            
        }   
        this.props.onOrderBurger(order,this.props.token)
    }

    checkvalidity(value,rules)
    {
        let isValid=true;
        if(rules.required){
            isValid= value.trim()!=='' && isValid;
        }
        if(rules.maxLength){
            isValid= value.length===rules.maxLength&&isValid
        }
        return isValid
    }
    inputChangedHandler=(event,inputIdentifier)=>{
         const updatedorderForm={
             ...this.state.orderForm
         };
         const updatedformElement={...updatedorderForm[inputIdentifier]};
         updatedformElement.value=event.target.value;
         if(updatedformElement.elementType==='input')
         {
            updatedformElement.valid =this.checkvalidity(updatedformElement.value,updatedformElement.validation)
        }
        else
        {
            updatedformElement.valid=true   
        }
        updatedformElement.touched=true;
        updatedorderForm[inputIdentifier]=updatedformElement
        let formIsvalid=true;
        for(let inputIdentifier in updatedorderForm)
        {
            if(!(updatedorderForm[inputIdentifier].valid&&formIsvalid))
            {
                formIsvalid=false
            }

        }
        this.setState({orderForm:updatedorderForm,formvalid:formIsvalid});       

    }
    render(){
        const formElementArray=[];
        for(let key in this.state.orderForm){
            formElementArray.push({
                id:key,
                config:this.state.orderForm[key]
            })
        }

        let form=(
            <form onSubmit={this.orderHandler}>
                    {formElementArray.map(formElement=>(
                        <Input key={formElement.id}
                         elementType={formElement.config.elementType}
                         elementConfig={formElement.config.elementconfig} 
                         Value={formElement.config.value}
                         invalid={!formElement.config.valid}
                         touched={formElement.config.touched}
                         changed={(event)=>this.inputChangedHandler(event,formElement.id)}
                         />
                    ))}
                    <Button btnType="Success" disabled={!this.state.formvalid} >ORDER</Button>
                </form>
        )
        if(this.props.loading)
        {   
            form=<Spinner/>
             
        }
        return(
            <div className={classes.Contactdata}>
                <h4>Enter your contact data</h4>
                {form}
            </div>
            
        )
    }
}
const mapStateToProps=state=>{
    return {
        ings:state.bugerBuilder.ingrediant,
        price:state.bugerBuilder.totalprice,
        loading:state.order.loading,
        token:state.auth.token,
        userid:state.auth.userid
    };
}
const mapDispatchToProps=dispatch=>{
    return{
onOrderBurger:(orderData,token)=>dispatch(actions.purchaseBurger(orderData,token))
};
}
export default connect(mapStateToProps,mapDispatchToProps)(withErrorHandler(ContatData,instance))