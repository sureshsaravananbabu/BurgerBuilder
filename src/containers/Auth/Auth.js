import React,{ Component } from 'react';
import Input from '../../components/UI/Input/Input'
import Button from '../../components/UI/Button/Button'
import classes from './Auth.css'
import * as actions from '../../store/actions/index'
import {connect} from 'react-redux'
import {Redirect } from 'react-router-dom'
import Spinner from '../../components/UI/Spinner/Spineer'

class Auth extends Component{
    state={
        AuthForm:{
            email:{
                elementType:'input',
                elementconfig:{
                    type:'email',
                    placeholder:'Email Address '
                },
                value:'',
                validation:{
                    required:true,
                    isEmail:true
                },
                valid:false,
                touched:false
            },
            password:{
                elementType:'input',
                elementconfig:{
                    type:'password',
                    placeholder:'password'
                },
                value:'',
                validation:{
                    required:true,
                    minLength:6
                },
                valid:false,
                touched:false
            }
        }
    }
    componentDidMount(){
        if(!this.props.building && this.props.authRedirect!=='/')
        {
            this.props.onSetAuthRedirectPath()
        }

    }
    checkValidity(value, rules) {
        let isValid = true;
        if (!rules) {
            return true;
        }
        
        if (rules.required) {
            isValid = value.trim() !== '' && isValid;
        }

        if (rules.minLength) {
            isValid = value.length >= rules.minLength && isValid
        }

        if (rules.maxLength) {
            isValid = value.length <= rules.maxLength && isValid
        }

        if (rules.isEmail) {
            const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
            isValid = pattern.test(value) && isValid
        }

        if (rules.isNumeric) {
            const pattern = /^\d+$/;
            isValid = pattern.test(value) && isValid
        }

        return isValid;
    }

    inputChangedHandler= (event ,AuthName) =>{
        const updatedcontrols={
            ...this.state.AuthForm,
            [AuthName]:{
                ...this.state.AuthForm[AuthName],
                value:event.target.value ,
                valid :this.checkValidity(event.target.value,this.state.AuthForm[AuthName].validation),
                touched:true
            }

        }
        this.setState({AuthForm:updatedcontrols})
    }

    switchAuthHandler=()=>{
        this.setState(
            prevstate=>{
                return{isSignup:!prevstate.isSignup}
            }
        )
    }


    submitHandler=(event)=>{
        event.preventDefault();
        this.props.onAuth(this.state.AuthForm.email.value,this.state.AuthForm.password.value,this.state.isSignup)
    }
    render(){
        const formElementArray=[];
        for(let key in this.state.AuthForm){
            formElementArray.push({
                id:key,
                config:this.state.AuthForm[key]
            })
        }
        let form =formElementArray.map(formElement=>(
            <Input 
            key={formElement.id} 
            elementType={formElement.config.elementType}
            elementConfig={formElement.config.elementconfig} 
            Value={formElement.config.value}
            invalid={!formElement.config.valid}
            touched={formElement.config.touched}
            changed={(event)=>this.inputChangedHandler(event,formElement.id)}/>         
        ));
            if (this.props.loading){
                form=<Spinner/>
            }
            let errorMessage=null;
            if(this.props.error){
                errorMessage=(
                <p>{this.props.error.message}</p>
                );
            }
            let authredirect=null;
            if(this.props.isAuthenticated){
                 authredirect  =<Redirect to={this.props.authRedirect}/> 
            }
        return(
            <div className={classes.Auth}>
                {authredirect}
                {errorMessage}
                <form onSubmit={this.submitHandler}>
                    {form}
                <Button btnType="Success">Submit</Button>
                </form>
                 <Button  clicked={this.switchAuthHandler}
                 btnType="Danger">SWITCH TO {this.state.isSignup ? 'SIGNIN' :'SIGNUP'}</Button>
            </div>
        );
    }
}


const mapStateToProps=state=>{
    return {
        loading:state.auth.loading,
        error:state.auth.error,
        isAuthenticated:state.auth.token!==null,
        building:state.bugerBuilder.Building,
        authRedirect:state.auth.authredirect

    }
}


const mapDispatchToProps=dispatch=>{
    return{
        onAuth:(email,password,isSignup)=>dispatch(actions.auth(email,password,isSignup)),
        onSetAuthRedirectPath:()=>dispatch(actions.setAuthRedirectPath('/'))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Auth)