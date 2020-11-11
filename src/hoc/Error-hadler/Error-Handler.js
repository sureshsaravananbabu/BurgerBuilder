import React ,{Component} from 'react';
import instance from '../../axios-orders';
import Modal from '../../components/UI/Modal/Modal'
import Reactaux from '../reactaux'
const ErrorHandler=(WrappedComponent)=>{
    return class extends Component {
            state={
                error:null
            }
            
            componentWillMount(){
                this.reqInterceptor =instance.interceptors.request.use(req=>{
                this.setState({error:null});  
                return req; 
            })
            this.reqInterceptor =instance.interceptors.response.use(res=> res,error=>{
                console.log(error)
                this.setState({error:error});
            });
        }
        errorconfirmhandler=()=>{
            this.setState({error:null})
        }
        render(){
            return(
                <Reactaux>
                <Modal show={this.state.error}
                    back={this.errorconfirmhandler}>
                    {this.state.error ? this.state.error.message :null }
                </Modal>
                <WrappedComponent {...this.props} />
                </Reactaux>
            );
        }
    } 

} 

export default ErrorHandler